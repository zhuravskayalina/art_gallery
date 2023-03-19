export interface Painting {
  id: number;
  name: string;
  author: string;
  image: string;
  info: string;
  size: {
    width: number;
    height: number;
  };
  description: string;
  price: number;
}
