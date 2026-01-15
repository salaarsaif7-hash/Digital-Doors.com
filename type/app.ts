export interface App {
  id: number;
  name: string;
  description: string;
  isFeatured: boolean;
  price: string;
  icon: string;
  category: string; // اگر app object میں category ہو
}

// یا اگر JSON صرف array ہے
export type AppsArray = App[];