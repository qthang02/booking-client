import { LoginRequest, LoginResponse, RegisterRequset } from "../model/authen";
import { useMutation } from "react-query";
import { notification } from "antd";
import {API_URL} from "../config/config.ts";
import axios from "../util/axios.ts";
import {useAuthStore} from "../store/auth.ts";

const apiRegister = (req: RegisterRequset): Promise<void> => {
  return axios.post(`${API_URL}/api/v1/auth/register`, req);
};

const apiLogin = (req: LoginRequest): Promise<LoginResponse> => {
  return axios.post(`${API_URL}/api/v1/auth/login`, req);
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (req: RegisterRequset) => apiRegister(req),
    onSuccess: () => {
      notification.success({
        message: "Đăng kí thành công!",
      });
    },
    onError: () => {
      notification.error({
        message: "Đăng kí thất bại!",
      });
    },
  });
};

export const useLogin = () => {
  const setAuthToken = useAuthStore((state) => state.setAuthToken);

  return useMutation({
    mutationFn: (req: LoginRequest) => apiLogin(req),
    onSuccess: (resp: LoginResponse) => {
      notification.success({
        message: "Đăng nhập thành công!",
      });

      if (resp.token) {
        setAuthToken(resp.token);
      }
    },
    onError: () => {
      notification.error({
        message: "Đăng nhập thất bại!",
      });
    },
  });
};
