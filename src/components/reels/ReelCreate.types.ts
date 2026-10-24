export interface ReelCreateProps {
  onClose?: () => void;
  initialOriginalReelId?: string;
  initialResponseType?: 'duet' | 'stitch';
  initialAudioId?: string;
}
