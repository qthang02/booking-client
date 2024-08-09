import {useMutation, useQuery} from "react-query";
import {Bookings, ListOrdersResponse} from "../model/bookings.ts";
import { notification} from "antd";
import {CreatePaymentResponse} from "../model/payment.ts";
import {API_URL} from "../config/config.ts";
import axios from "../util/axios.ts";

const apiCreateOrder = (req: Bookings): Promise<CreatePaymentResponse> => {
  return axios.post(`${API_URL}/api/v1/order`, req).then(res => res.data);
};

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: (req: Bookings) => apiCreateOrder(req),
    onSuccess: (res) => {
      notification.success({message: "tạo order thành công!"});
      window.open(res.paymentURL);

    },
    onError: (err: Error) => {
      notification.error({message: "tạo order thất bại " + err.message})
    }
  })
};
const apiGetListOrder = (): Promise<ListOrdersResponse> => {
  return axios.get(`${API_URL}/api/v1/order`).then(res => res.data);
};


export const useGetListOrder = () => {
  return useQuery('listOrders', apiGetListOrder, {
    onSuccess: () => {
      notification.success({message: "Lấy danh sách order thành công!"});
    },
    onError: (err: Error) => {
      notification.error({message: "Lấy danh sách order thất bại " + err.message});
    }
  });
};
