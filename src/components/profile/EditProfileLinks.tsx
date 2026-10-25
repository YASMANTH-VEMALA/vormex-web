import type { ChangeEventHandler } from 'react';
import type { ProfileUpdateData } from '@/types/profile';
import { motion } from 'framer-motion';
import { Globe, Linkedin } from 'lucide-react';

type EditProfileLinksProps = Pick<ProfileUpdateData, 'portfolioUrl' | 'linkedinUrl'> & {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export function EditProfileLinks({ portfolioUrl, linkedinUrl, onChange }: EditProfileLinksProps) {
  return (
    <motion.div
      key="links"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <div>
        <label
          htmlFor="edit-profile-portfolioUrl"
          className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1"
        >
          <Globe className="w-4 h-4 inline mr-1" />
          Portfolio URL
        </label>
        <input
          type="url"
          id="edit-profile-portfolioUrl"
          name="portfolioUrl"
          value={portfolioUrl}
          onChange={onChange}
          placeholder="https://yourportfolio.com"
          className="w-full bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white px-3 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="edit-profile-linkedinUrl"
          className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1"
        >
          <Linkedin className="w-4 h-4 inline mr-1" />
          LinkedIn URL
        </label>
        <input
          type="url"
          id="edit-profile-linkedinUrl"
          name="linkedinUrl"
          value={linkedinUrl}
          onChange={onChange}
          placeholder="https://linkedin.com/in/yourprofile"
          className="w-full bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white px-3 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 focus:border-blue-500 focus:outline-none"
        />
      </div>
    </motion.div>
  );
}
