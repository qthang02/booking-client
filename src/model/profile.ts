export interface User {
    id: number;
    username: string;
    phone: number;
    address: string;
    email: string;
    gender: boolean;
}
  
export interface UpdateProfileRequest {
    id: number;
    user: User;
}