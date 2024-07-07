import axios from "axios";
import { notification } from "antd";
import { useQuery } from "react-query";

const api = `https://3586-113-161-37-63.ngrok-free.app`;

const apiGetoneUserById = (): Promise<void> => {
  return axios.get(`${api}/api/v1/`);
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
