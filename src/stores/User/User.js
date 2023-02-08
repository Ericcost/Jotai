import { atom } from 'jotai';

export const firstNameAtom = atom('');
export const lastNameAtom = atom('');
export const fullNameAtom = atom(
  ( get ) => {
    const firstName = get(firstNameAtom);
    const lastName = get(lastNameAtom);
    return firstName && lastName
      ? `${firstName} ${lastName}`
      : null;
  }
);