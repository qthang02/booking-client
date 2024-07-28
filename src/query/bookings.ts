import axios from "axios";
import { notification } from "antd";
import { useQuery } from "react-query";

const api = `https://3586-113-161-37-63.ngrok-free.app`;
const token = localStorage.getItem("token");
const instance = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
const apiGetallBookings = (): Promise<void> => {
  return instance.get(`${api}/api/v1/`);
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
