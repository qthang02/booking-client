import axios from "axios";
import {API} from "../util/config.tsx";
import {useQuery} from "react-query";
import { notification} from "antd";
import {CreatePaymentResponse} from "../model/payment.ts";

const token = localStorage.getItem("token");
const instance = axios.create({
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

const apiCreatePayment = (amount: number, orderInfo: string): Promise<CreatePaymentResponse> => {
    return instance.get(`${API}/api/v1/payment/create-payment`, {
        params: {amount, orderInfo}
    }).then(res => res.data);
};

export const useCreatePayment = (amount: number, orderInfo: string) => {
    return useQuery({
        queryFn: () => apiCreatePayment(amount, orderInfo),
        onSuccess: (resp: CreatePaymentResponse) => {
            window.location.href = resp.paymentURL;
        },
        onError: (err: Error) => {
            notification.error({message: "quá trình thanh toán thất bại " + err.message})
        }
    })
};