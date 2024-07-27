import { Categories } from "../model/categories";
import axios from "axios";
import { useQuery } from "react-query";

const api = `http://api.thangnq.studio:8080`;

const apiListCategories = async (): Promise<Categories[]> => {
    const response = await axios.get(`${api}/api/v1/category`);
    return response.data.categories; // Đảm bảo rằng đây là một mảng
};

export const useListCategories = () => {
  return useQuery('categories', apiListCategories);
};
