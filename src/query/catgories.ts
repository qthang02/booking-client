import axios from "axios";
import { notification } from "antd";
import { useQuery } from "react-query";

const api = `https://3586-113-161-37-63.ngrok-free.app`;

const apiGetallCategories = (): Promise<void> => {
  return axios.get(`${api}/api/v1/`);
};

export const useGetallCategories = () => {
  return useQuery({
    queryKey: ["Rooms"],
    queryFn: () => apiGetallCategories,
    onError: () => {
      notification.error({
        message: "Hiển thị danh mục thất bại",
        description: "Call api failed!",
      });
    },
  });
};
