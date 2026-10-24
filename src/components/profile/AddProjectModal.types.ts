import type { Project } from '@/types/profile';
export interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProjectAdded: (project: Project) => void;
  onProjectUpdated?: (project: Project) => void;
  onProjectDeleted?: (projectId: string) => void;
  projectToEdit?: Project | null;
}
