import axios from "axios";
import { notification } from "antd";
import { useQuery } from "react-query";

const api = `https://3586-113-161-37-63.ngrok-free.app`;

const apiGetallRooms = (): Promise<void> => {
  return axios.get(`${api}/api/v1/`);
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
