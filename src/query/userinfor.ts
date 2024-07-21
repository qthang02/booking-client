import { ProfileResponse } from "../model/users";
import axios from "axios";
import { notification } from "antd";
import { useQuery } from "react-query";

const api = `http://api.thangnq.studio:8080`;

const apiGetUserInfo = (id: number): Promise<ProfileResponse> => {
  return axios.get(`${api}/api/v1/user/${id}`);
}

export const useGetUserInfo = (id: number) => {
  return useQuery({
    queryKey: ["getUserInfo", id],
    queryFn: () => apiGetUserInfo(id),
    onSuccess: () => {
      notification.success({
        message: "Lấy thông tin người dùng thành công!",
        description: "Call api success!",
      });
    },
    onError: (error: Error) => {
      notification.error({
        message: "Lấy thông tin người dùng thất bại!",
        description: `Call api failed: ${error.message}`,
      });
    },
  });
}
