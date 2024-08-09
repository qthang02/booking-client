import axios from "axios";
import { notification } from "antd";
import { useQuery } from "react-query";
import {API} from "../config/config.ts";

const apiGetoneUserById = (): Promise<void> => {
  return axios.get(`${API}/api/v1/`);
};

export const useGetoneUserById = () => {
  return useQuery({
    queryKey: ["User"],
    queryFn: () => apiGetoneUserById,
    onError: () => {
      notification.error({
        message: "Hiển thị thông tin người dùng thất bại",
        description: "Call api failed!",
      });
    },
  });
};
