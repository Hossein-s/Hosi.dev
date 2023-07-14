export interface AppData {
  basicInfo: {
    description: string;
  };
  experiences: Array<{
    position: string;
    company: string;
    period: string;
    current: boolean;
  }>;
  skillCategories: Array<{ name: string; items: Array<{ name: string; image: string }> }>;
}
