import { ListCategoriesResponse} from "../model/categories";
import axios from "axios";
import { useQuery } from "react-query";
import {API} from "../util/config.tsx";

const apiListCategories = async (): Promise<ListCategoriesResponse> => {
    const response = await axios.get(`${API}/api/v1/category`);
    return response.data.categories; // Đảm bảo rằng đây là một mảng
};

export const useListCategories = () => {
  return useQuery('categories', apiListCategories);
};
