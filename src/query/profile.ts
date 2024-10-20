import {UpdateProfileRequest, User} from "../model/profile.ts";
import axios from "../util/axios.ts";
import {API_URL} from "../config/config.ts";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {notification} from "antd";

const apiGetProfile = (): Promise<User> => {
    return axios.get(`${API_URL}/api/v1/auth/profile`);
};

const apiUpdateProfile = (req: UpdateProfileRequest): Promise<void> => {
    return axios.put(`${API_URL}/api/v1/user/${req.id}`, req.user);
};

export const useGetProfile = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: () => apiGetProfile(),
        onError: (error: Error) => {
            notification.error({
                message: "Hiển thị thông tin người dùng thất bại: " + error.message,
            });
        },
    });
};

export const useUpdateCustomer = () => {
    const client= useQueryClient();
    return useMutation({
        mutationFn: (req: UpdateProfileRequest) => apiUpdateProfile(req),
        onSuccess: () => {
            notification.success({
                message: "Cập nhật thông tin người dùng thành công!",
            });
            client.invalidateQueries("profile")
        },
        onError: (error: Error) => {
            notification.error({
                message: "Cập nhật thông tin người dùng thất bại: " + error.message,
            });
        },
    });
};