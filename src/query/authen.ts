import { LoginRequest, LoginResponse, RegisterRequset } from "../model/authen";

import axios from "axios";
import { notification } from "antd";
import { useMutation } from "react-query";

const api = `https://0e1f-113-22-160-189.ngrok-free.app`;

const apiRegister = (req: RegisterRequset): Promise<void> => {
    return axios.post(`${api}/api/v1/auth/register`, req);
}

export const useRegister = () => {
    return useMutation({
        mutationFn: (req: RegisterRequset) => apiRegister(req),
        onSuccess: () => {
            notification.success({
                message: "Đăng kí thành công!",
                description: "Call api success!",
              });
        },
        onError: () => {
            notification.error({
              message: "Đăng kí thất bại!",
              description: "Call api failed!",
            });
          },
    })
}

const apiLogin = (req: LoginRequest): Promise<LoginResponse> => {
    return axios.post(`${api}/api/v1/auth/login`, req);
}

export const useLogin = () => {
    return useMutation({
        mutationFn: (req: LoginRequest) => apiLogin(req),
        onSuccess: () => {
            notification.success({
                message: "Đăng nhập thành công!",
                description: "Call api success!",
              });
        },
        onError: () => {
            notification.error({
              message: "Đăng nhập thất bại!",
              description: "Call api failed!",
            });
          },
    })
}