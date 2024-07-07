export interface users {
    id: number,
    username: string,
    phone: number,
    address: string,
    email: string,
    role: ['customer', 'staff', 'admin'],
}