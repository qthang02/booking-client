import { LoginRequest, LoginResponse, RegisterRequset } from "../model/authen";
import { UpdateUserRequest, User } from "../model/users";
import { useMutation, useQuery, useQueryClient } from "react-query";

import axios from "axios";
import { notification } from "antd";

const api = `http://api.thangnq.studio:8080`;

const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const apiRegister = (req: RegisterRequset): Promise<void> => {
  return axios.post(`${api}/api/v1/auth/register`, req);
};

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
  });
};

const apiLogin = (req: LoginRequest): Promise<LoginResponse> => {
  return axios.post(`${api}/api/v1/auth/login`, req).then((resp) => resp.data);
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (req: LoginRequest) => apiLogin(req),
    onSuccess: (resp: LoginResponse) => {
      notification.success({
        message: "Đăng nhập thành công!",
      });

      if (resp.token) {
        localStorage.setItem("token", resp.token);
      }
    },
    onError: () => {
      notification.error({
        message: "Đăng nhập thất bại!",
      });
    },
  });
};

const apiProfile = (): Promise<User> => {
  return instance.get(`${api}/api/v1/auth/profile`).then((resp) => resp.data);
};

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["profiles"],
    queryFn: () => apiProfile(),
    onError: (error: Error) => {
      notification.error({
        message: "Hiển thị thông tin người dùng thất bại: " + error.message,
      });
    },
  });
};

const apiUpdateCustomers = (req: UpdateUserRequest): Promise<void> => {
  return instance.put(`${api}/api/v1/user/${req.id}`, req.user);
};

export const useUpdateCustomer = () => {
  const client= useQueryClient();
  return useMutation({
    mutationFn: (req: UpdateUserRequest) => apiUpdateCustomers(req),
    onSuccess: () => {
      notification.success({
        message: "Cập nhật thông tin người dùng thành công!",
      });
      client.invalidateQueries("profiles");
    },
    onError: (error: Error) => {
      notification.error({
        message: "Cập nhật thông tin người dùng thất bại: " + error.message,
      });
    },
  });
};
