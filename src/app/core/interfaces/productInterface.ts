
import {ReviewInterface} from './reviewInterface';
import {TagInteface} from './tagInteface';

export interface ProductInterface {
  sku: string;
  author: string;
  title: string;
  description: string;
  thumbnail: string;
  image: string;
  price: number;
  currency: string;
  itemsInStock: number;
  rating: number;
  tags: TagInteface[];
  reviews?: ReviewInterface[];
  recommendations?: string[] ;
}
