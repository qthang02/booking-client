import { ListCategoriesResponse} from "../model/categories";
import axios from "axios";
import { useQuery } from "react-query";
import {API} from "../config/config.ts";

const apiListCategories = async (): Promise<ListCategoriesResponse> => {
    const response = await axios.get(`${API}/api/v1/category`);
    return response.data.categories;
};

export const useListCategories = () => {
  return useQuery('categories', apiListCategories);
};
