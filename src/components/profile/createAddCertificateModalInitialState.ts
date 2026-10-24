import type { AddCertificateModalProps } from './AddCertificateModal.types';
export function createAddCertificateModalInitialState({
  certificateToEdit,
}: Pick<AddCertificateModalProps, 'certificateToEdit'>) {
  const values = {
    loading: false,
    uploading: false,
    error: null as string | null,
    name: '',
    issuingOrg: '',
    issueDate: '',
    expiryDate: '',
    doesNotExpire: false,
    credentialId: '',
    credentialUrl: '',
    certificateFile: null as File | null,
    certificatePreview: null as string | null,
    uploadMethod: 'file' as 'url' | 'file',
  };

  if (certificateToEdit) {
    values.name = certificateToEdit.name;
    values.issuingOrg = certificateToEdit.issuingOrg;
    values.issueDate = certificateToEdit.issueDate.split('T')[0];
    values.expiryDate = certificateToEdit.expiryDate
      ? certificateToEdit.expiryDate.split('T')[0]
      : '';
    values.doesNotExpire = certificateToEdit.doesNotExpire;
    values.credentialId = certificateToEdit.credentialId || '';
    values.credentialUrl = certificateToEdit.credentialUrl || '';

    // Preview setup
    if (certificateToEdit.credentialUrl) {
      if (
        certificateToEdit.credentialUrl.match(/\.(jpeg|jpg|png|webp)/i) ||
        certificateToEdit.credentialUrl.includes('bunnycdn')
      ) {
        values.certificatePreview = certificateToEdit.credentialUrl;
        values.uploadMethod = 'file';
      } else {
        values.uploadMethod = 'url';
      }
    } else {
      values.uploadMethod = 'file';
    }
  } else {
    {
      values.name = '';
      values.issuingOrg = '';
      values.issueDate = '';
      values.expiryDate = '';
      values.doesNotExpire = false;
      values.credentialId = '';
      values.credentialUrl = '';
      values.certificateFile = null;
      values.certificatePreview = null;
      values.uploadMethod = 'file';
      values.error = null;
    }
  }
  values.error = null;

  return values;
}
