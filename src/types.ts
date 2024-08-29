export interface PersonalInfo {
  name: string;
  gender: string;
  age: string | number;
  position: string;
  workingYears: string | number;
  phoneNumber: string;
  email: string;
  picture: string;
  github?: string;
  blog?: string;
  salary?:string;
  education?:string
}

export interface PersonalSkill {
  icons?: string[];
  descriptions: string[];
  boldWords?: string[];
}

export interface Experience {
  type: string;
  icon?: string;
  company?: string;
  position?: string;
  school?: string;
  degree?: string;
  major?: string;
  time: string;
  descriptions: string[];
  boldWords?: string[];
}

export interface Project {
  icon?: string;
  name: string;
  description: string[];
  stack: string[];
  details: any[];
  boldWords?: string[];
}
