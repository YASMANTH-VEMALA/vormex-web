import type { ProjectInput } from '@/types/profile';
import type { AddProjectModalProps } from './AddProjectModal.types';
export function createAddProjectModalInitialState({
  projectToEdit,
}: Pick<AddProjectModalProps, 'projectToEdit'>) {
  const values = {
    saving: false,
    deleting: false,
    error: null as string | null,
    techInput: '',
    imageUploadOpen: false,
    formData: {
      name: '',
      description: '',
      role: '',
      techStack: [],
      startDate: '',
      endDate: '',
      isCurrent: false,
      projectUrl: '',
      githubUrl: '',
      images: [],
      featured: false,
    } as ProjectInput,
  };

  if (projectToEdit) {
    values.formData = {
      name: projectToEdit.name,
      description: projectToEdit.description,
      role: projectToEdit.role || '',
      techStack: projectToEdit.techStack || [],
      startDate: projectToEdit.startDate
        ? new Date(projectToEdit.startDate).toISOString().split('T')[0]
        : '',
      endDate: projectToEdit.endDate
        ? new Date(projectToEdit.endDate).toISOString().split('T')[0]
        : '',
      isCurrent: projectToEdit.isCurrent,
      projectUrl: projectToEdit.projectUrl || '',
      githubUrl: projectToEdit.githubUrl || '',
      images: projectToEdit.images || [],
      featured: projectToEdit.featured,
    };
  } else {
    // Reset for add mode
    values.formData = {
      name: '',
      description: '',
      role: '',
      techStack: [],
      startDate: '',
      endDate: '',
      isCurrent: false,
      projectUrl: '',
      githubUrl: '',
      images: [],
      featured: false,
    };
  }

  return values;
}
