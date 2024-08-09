import {Rooms} from "./rooms.ts";

export interface Categories {
    ID: number;
    name: string;
    description: string;
    image_link: string;
    price: number;
    available_rooms: number;
    type: string;
    rooms: Rooms[]
  }
  export interface CreateCategoryRequest {
    categories: Categories;
  }
  
  export interface ListCategoriesResponse {
    categories: Categories[];
  }
  
  export interface UpdateCategoryRequest {
    id: number;
    category: Categories;
  }