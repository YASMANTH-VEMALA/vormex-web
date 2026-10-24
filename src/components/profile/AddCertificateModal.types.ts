import type { Certificate } from '@/types/profile';
export interface AddCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCertificateAdded: (certificate: Certificate) => void;
  certificateToEdit?: Certificate | null;
  onCertificateUpdated?: (certificate: Certificate) => void;
}
