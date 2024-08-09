import axios from "axios";
import { notification } from "antd";
import { useQuery } from "react-query";
import {API} from "../config/config.ts";

const apiGetallRooms = (): Promise<void> => {
  return axios.get(`${API}/api/v1/`);
};

export const useGetallRooms = () => {
  return useQuery({
    queryKey: ["Rooms"],
    queryFn: () => apiGetallRooms,
    onError: () => {
      notification.error({
        message: "Hiển thị danh sách phòng thất bại",
        description: "Call api failed!",
      });
    },
  });
};
