'use client';
import DomainReportModal from '@/components/reports/ReportModal';
export type ReportType = 'post' | 'comment' | 'user' | 'group' | 'chat';
interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: ReportType;
  targetId: string;
  targetName?: string;
  reportedUserId?: string;
}
/** Compatibility entry point; reporting behavior has a single owner. */
export function ReportModal(props: ReportModalProps) {
  return (
    <DomainReportModal
      {...props}
      conversationId={props.type === 'chat' ? props.targetId : undefined}
    />
  );
}
