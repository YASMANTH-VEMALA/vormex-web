export type ContactPickerContact = {
  name?: string[];
  email?: string[];
};

export type NavigatorWithContacts = Navigator & {
  contacts?: {
    select: (
      properties: Array<'name' | 'email'>,
      options?: { multiple?: boolean }
    ) => Promise<ContactPickerContact[]>;
  };
};

export type PeopleDiscoveryError = {
  name?: string;
  response?: { data?: { error?: string } };
};
