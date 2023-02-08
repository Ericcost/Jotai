import { atom } from 'jotai';

export const skillsAtom = atom([]);
export const skillsCountAtom = atom(
  ( get ) => {
    const array = get(skillsAtom);
    return array ? array.length : 0;
  }
);