export interface RegisterRequset {
  email: string;
  password: string;
  phone: string;
  gender: string;
  address: string;
  username: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}