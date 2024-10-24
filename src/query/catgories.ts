import { ListCategoriesResponse} from "../model/categories";
import { useQuery } from "react-query";
import {API_URL} from "../config/config.ts";
import axios from "../util/axios.ts";


const apiListCategories = async (): Promise<ListCategoriesResponse> => {
    return await axios.get(`${API_URL}/api/v1/category`);
};

export const useListCategories = () => {
  return useQuery('categories', apiListCategories);
};
