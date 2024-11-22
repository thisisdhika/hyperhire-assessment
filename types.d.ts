import * as Flags from 'country-flag-icons/react/3x2';

export type Profile = {
  name: string;
  role: string;
  experience: string;
  image: string;
  country: keyof typeof Flags;
  skills: string[];
};

export type Service = {
  id: number;
  icon: string;
  text: string;
};
