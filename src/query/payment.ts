import {useQuery} from "react-query";
import { notification} from "antd";
import {CreatePaymentResponse} from "../model/payment.ts";
import {API_URL} from "../config/config.ts";
import axios from "../util/axios.ts";

const apiCreatePayment = (amount: number, orderInfo: string): Promise<CreatePaymentResponse> => {
    return axios.get(`${API_URL}/api/v1/payment/create-payment`, {
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