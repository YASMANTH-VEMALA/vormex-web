'use client';
import { Button } from '@/components/ui/Button';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Calendar,
  Check,
  Github,
  Image as ImageIcon,
  Loader2,
  Monitor,
  Plus,
  Trash2,
  X,
} from 'lucide-react';
import type * as React from 'react';
import { ImageUploadModal } from './ImageUploadModal';

interface ProjectEditorViewProps {
  addTech: () => void;
  deleting: boolean;
  error: string | null;
  formData: import('@/types/profile').ProjectInput;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, Element>
  ) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement, Element>) => void;
  handleDelete: () => Promise<void>;
  handleImageUploaded: (imageUrl: string) => void;
  handleKeyPress: (e: React.KeyboardEvent<Element>) => void;
  handleSubmit: (e: React.FormEvent<Element>) => Promise<void>;
  imageUploadOpen: boolean;
  isEditMode: boolean;
  isOpen: boolean;
  onClose: () => void;
  onProjectDeleted: ((projectId: string) => void) | undefined;
  removeImage: (urlToRemove: string) => void;
  removeTech: (tech: string) => void;
  saving: boolean;
  setImageUploadOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTechInput: React.Dispatch<React.SetStateAction<string>>;
  techInput: string;
}

export function ProjectEditorView({
  addTech,
  deleting,
  error,
  formData,
  handleChange,
  handleCheckboxChange,
  handleDelete,
  handleImageUploaded,
  handleKeyPress,
  handleSubmit,
  imageUploadOpen,
  isEditMode,
  isOpen,
  onClose,
  onProjectDeleted,
  removeImage,
  removeTech,
  saving,
  setImageUploadOpen,
  setTechInput,
  techInput,
}: ProjectEditorViewProps) {
  return (
    <>
      <Dialog.Root open={isOpen} onOpenChange={onClose}>
        <Dialog.Portal>
          <AnimatePresence>
            {isOpen && (
              <>
                <Dialog.Overlay asChild>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm z-50 transition-opacity"
                  />
                </Dialog.Overlay>

                <Dialog.Content asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-50 px-4"
                  >
                    <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 shadow-2xl">
                      {/* Header */}
                      <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                        <Dialog.Title className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white uppercase">
                          {isEditMode ? 'Edit Project' : 'Add Project'}
                        </Dialog.Title>
                        <Dialog.Close asChild>
                          <button className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                          </button>
                        </Dialog.Close>
                      </div>

                      <form
                        onSubmit={handleSubmit}
                        className="p-6 space-y-6 max-h-[70vh] overflow-y-auto"
                      >
                        {error && (
                          <div className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wide">
                            {error}
                          </div>
                        )}

                        {/* Basics */}
                        <div className="space-y-4">
                          <div>
                            <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5 block">
                              Project Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="e.g. Vormex Web App"
                              className="w-full h-11 px-4 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                            />
                          </div>

                          <div>
                            <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5 block">
                              Description
                            </label>
                            <textarea
                              name="description"
                              value={formData.description}
                              onChange={handleChange}
                              placeholder="Briefly describe functionality, goals, and technical challenges..."
                              rows={3}
                              className="w-full p-4 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                            />
                          </div>

                          {/* Project Images */}
                          <div>
                            <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5 block">
                              Project Images
                            </label>
                            <div className="flex flex-wrap gap-2">
                              {formData.images &&
                                formData.images.map((img, idx) => (
                                  <div
                                    key={idx}
                                    className="relative w-24 h-16 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 group"
                                  >
                                    <img
                                      src={img}
                                      alt={`Project ${idx}`}
                                      className="w-full h-full object-cover"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => removeImage(img)}
                                      className="absolute top-1 right-1 p-1 bg-black/50 text-white hover:bg-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                    >
                                      <X className="w-3 h-3" />
                                    </button>
                                  </div>
                                ))}

                              <button
                                type="button"
                                onClick={() => setImageUploadOpen(true)}
                                className="w-24 h-16 flex items-center justify-center border border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 hover:border-black dark:hover:border-white transition-colors text-neutral-400 hover:text-black dark:hover:text-white"
                              >
                                <ImageIcon className="w-5 h-5" />
                              </button>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5 block">
                                Your Role
                              </label>
                              <input
                                type="text"
                                name="role"
                                value={formData.role || ''}
                                onChange={handleChange}
                                placeholder="e.g. Lead Developer"
                                className="w-full h-11 px-4 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5 block">
                                Tech Stack
                              </label>
                              <div className="flex gap-2">
                                <input
                                  type="text"
                                  value={techInput}
                                  onChange={(e) => setTechInput(e.target.value)}
                                  onKeyPress={handleKeyPress}
                                  placeholder="Add & Enter"
                                  className="flex-1 h-11 px-4 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                                />
                                <button
                                  type="button"
                                  onClick={addTech}
                                  className="w-11 h-11 flex items-center justify-center bg-black dark:bg-white text-white dark:text-black hover:opacity-90"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Tech Tags */}
                          {formData.techStack && formData.techStack.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {formData.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="inline-flex items-center gap-1 pl-2.5 pr-1.5 py-1 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white text-xs font-bold uppercase tracking-wider border border-neutral-200 dark:border-neutral-800"
                                >
                                  {tech}
                                  <button
                                    onClick={() => removeTech(tech)}
                                    className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                                  >
                                    <X className="w-3 h-3" />
                                  </button>
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Dates */}
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                          <div>
                            <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5 block">
                              Start Date
                            </label>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                              <input
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                className="w-full h-11 pl-10 pr-4 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5 block">
                              End Date
                            </label>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                              <input
                                type="date"
                                name="endDate"
                                value={formData.endDate || ''}
                                onChange={handleChange}
                                disabled={formData.isCurrent}
                                className="w-full h-11 pl-10 pr-4 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium focus:outline-none focus:border-black dark:focus:border-white transition-colors disabled:opacity-50"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Toggles */}
                        <div className="flex items-center gap-6">
                          <label className="flex items-center gap-2 cursor-pointer select-none">
                            <div
                              className={`w-4 h-4 border flex items-center justify-center transition-colors ${formData.isCurrent ? 'bg-black dark:bg-white border-black dark:border-white' : 'border-neutral-300 dark:border-neutral-700'}`}
                            >
                              {formData.isCurrent && (
                                <Check className="w-3 h-3 text-white dark:text-black" />
                              )}
                              <input
                                type="checkbox"
                                name="isCurrent"
                                checked={formData.isCurrent}
                                onChange={handleCheckboxChange}
                                className="hidden"
                              />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
                              Currently Working
                            </span>
                          </label>

                          <label className="flex items-center gap-2 cursor-pointer select-none">
                            <div
                              className={`w-4 h-4 border flex items-center justify-center transition-colors ${formData.featured ? 'bg-black dark:bg-white border-black dark:border-white' : 'border-neutral-300 dark:border-neutral-700'}`}
                            >
                              {formData.featured && (
                                <Check className="w-3 h-3 text-white dark:text-black" />
                              )}
                              <input
                                type="checkbox"
                                name="featured"
                                checked={formData.featured}
                                onChange={handleCheckboxChange}
                                className="hidden"
                              />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
                              Mark as Featured
                            </span>
                          </label>
                        </div>

                        {/* Links */}
                        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 space-y-4">
                          <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                            Project Links
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative">
                              <Monitor className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                              <input
                                type="url"
                                name="projectUrl"
                                value={formData.projectUrl || ''}
                                onChange={handleChange}
                                placeholder="Live Demo URL"
                                className="w-full h-11 pl-10 pr-4 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                              />
                            </div>
                            <div className="relative">
                              <Github className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                              <input
                                type="url"
                                name="githubUrl"
                                value={formData.githubUrl || ''}
                                onChange={handleChange}
                                placeholder="GitHub Repository"
                                className="w-full h-11 pl-10 pr-4 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="flex gap-3 pt-2">
                          {isEditMode && onProjectDeleted && (
                            <Button
                              type="button"
                              onClick={handleDelete}
                              disabled={deleting}
                              className="w-14 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 rounded-none hover:bg-red-100 dark:hover:bg-red-900/30 flex items-center justify-center shrink-0"
                            >
                              {deleting ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : (
                                <Trash2 className="w-4 h-4" />
                              )}
                            </Button>
                          )}
                          <Button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-4 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white rounded-none text-xs font-bold uppercase tracking-wider hover:bg-neutral-50 dark:hover:bg-neutral-900"
                          >
                            Cancel
                          </Button>
                          <Button
                            type="submit"
                            disabled={saving || !formData.name.trim()}
                            className="flex-[2] py-4 bg-black dark:bg-white text-white dark:text-black rounded-none text-xs font-bold uppercase tracking-wider hover:opacity-90 disabled:opacity-50"
                          >
                            {saving ? (
                              <Loader2 className="w-3 h-3 animate-spin" />
                            ) : isEditMode ? (
                              'Save Changes'
                            ) : (
                              'Create Project'
                            )}
                          </Button>
                        </div>
                      </form>
                    </div>
                  </motion.div>
                </Dialog.Content>
              </>
            )}
          </AnimatePresence>
        </Dialog.Portal>
      </Dialog.Root>

      <ImageUploadModal
        isOpen={imageUploadOpen}
        onClose={() => setImageUploadOpen(false)}
        type="project"
        onImageUpdated={handleImageUploaded}
      />
    </>
  );
}
