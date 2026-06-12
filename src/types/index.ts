export interface EducationItem {
  id: string;
  schoolName?: string;
  collageName?: string;
  city: string;
  percentage?: string;
  cgpa?: string;
  sgpa?: string;
  specification?: string;
  branch?: string;
}

export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  tech_stack: string[];
  live_demo: string | null;
  code: string | null;
  images?: any[];
  about: string;
  features?: string[];
  isClientProject: boolean;
  clientMessage?: string;
}

export interface SkillItem {
  name: string;
  imageUrl: any;
}
