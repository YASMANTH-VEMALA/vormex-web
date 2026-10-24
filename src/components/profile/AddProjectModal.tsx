'use client';
import type { AddProjectModalProps } from './AddProjectModal.types';
import { ProjectEditorView } from './ProjectEditorView';
import { createAddProjectModalInitialState } from './createAddProjectModalInitialState';
export type { AddProjectModalProps } from './AddProjectModal.types';

import { asApiError } from '@/lib/api/errors';
import { createProject, deleteProject, updateProject } from '@/lib/api/profile';
import type { ProjectInput } from '@/types/profile';
import { useState } from 'react';

function AddProjectModalSession({
  isOpen,
  onClose,
  onProjectAdded,
  onProjectUpdated,
  onProjectDeleted,
  projectToEdit,
}: AddProjectModalProps) {
  const [initialValues] = useState(() => createAddProjectModalInitialState({ projectToEdit }));
  const [saving, setSaving] = useState(initialValues.saving);
  const [deleting, setDeleting] = useState(initialValues.deleting);
  const [error, setError] = useState<string | null>(initialValues.error);
  const [techInput, setTechInput] = useState(initialValues.techInput);
  const [imageUploadOpen, setImageUploadOpen] = useState(initialValues.imageUploadOpen);

  const [formData, setFormData] = useState<ProjectInput>(initialValues.formData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
      ...(name === 'isCurrent' && checked ? { endDate: '' } : {}),
    }));
  };

  const addTech = () => {
    if (techInput.trim() && !formData.techStack?.includes(techInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        techStack: [...(prev.techStack || []), techInput.trim()],
      }));
      setTechInput('');
    }
  };

  const removeTech = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      techStack: prev.techStack?.filter((t) => t !== tech) || [],
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTech();
    }
  };

  const handleDelete = async () => {
    if (!projectToEdit || !onProjectDeleted) return;
    if (!confirm('Are you sure you want to delete this project?')) return;

    setDeleting(true);
    try {
      await deleteProject(projectToEdit.id);
      onProjectDeleted(projectToEdit.id);
      onClose();
    } catch (err: unknown) {
      setError(asApiError(err).response?.data?.error || 'Failed to delete project');
    } finally {
      setDeleting(false);
    }
  };

  const handleImageUploaded = (imageUrl: string) => {
    setFormData((prev) => ({
      ...prev,
      images: [...(prev.images || []), imageUrl],
    }));
  };

  const removeImage = (urlToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images?.filter((url) => url !== urlToRemove) || [],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError('Project name is required');
      return;
    }
    if (!formData.description.trim()) {
      setError('Project description is required');
      return;
    }
    if (!formData.startDate) {
      setError('Start date is required');
      return;
    }

    setSaving(true);
    setError(null);

    try {
      if (projectToEdit) {
        // Update existing
        if (onProjectUpdated) {
          const updated = await updateProject(projectToEdit.id, formData);
          onProjectUpdated(updated);
        }
      } else {
        // Create new
        const project = await createProject(formData);
        onProjectAdded(project);
      }
      onClose();
    } catch (err: unknown) {
      setError(
        asApiError(err).response?.data?.error ||
          `Failed to ${projectToEdit ? 'update' : 'add'} project`
      );
    } finally {
      setSaving(false);
    }
  };

  const isEditMode = !!projectToEdit;

  return (
    <ProjectEditorView
      addTech={addTech}
      deleting={deleting}
      error={error}
      formData={formData}
      handleChange={handleChange}
      handleCheckboxChange={handleCheckboxChange}
      handleDelete={handleDelete}
      handleImageUploaded={handleImageUploaded}
      handleKeyPress={handleKeyPress}
      handleSubmit={handleSubmit}
      imageUploadOpen={imageUploadOpen}
      isEditMode={isEditMode}
      isOpen={isOpen}
      onClose={onClose}
      onProjectDeleted={onProjectDeleted}
      removeImage={removeImage}
      removeTech={removeTech}
      saving={saving}
      setImageUploadOpen={setImageUploadOpen}
      setTechInput={setTechInput}
      techInput={techInput}
    />
  );
}

/** A fresh form session owns its draft; background prop updates cannot overwrite it. */
export function AddProjectModal(props: AddProjectModalProps) {
  return props.isOpen ? (
    <AddProjectModalSession key={props.projectToEdit?.id ?? 'new'} {...props} />
  ) : null;
}
