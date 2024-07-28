import axios from "axios";
import { notification } from "antd";
import { useQuery } from "react-query";
import {API} from "../util/config.tsx";

const token = localStorage.getItem("token");
const instance = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
const apiGetallBookings = (): Promise<void> => {
  return instance.get(`${API}/api/v1/`);
};

export const useGetallBookings = () => {
  return useQuery({
    queryKey: ["Bookings"],
    queryFn: () => apiGetallBookings,
    onError: () => {
      notification.error({
        message: "Hiển thị thông tin đặt phòng thất bại",
        description: "Call api failed!",
      });
    },
  });
};
