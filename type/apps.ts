export interface App {
  id: number;
  name: string;
  description: string;
  isFeatured: boolean;
  price: string;
  icon: string;
}

export interface CategoryData {
  category: string;
  apps: App[];
}