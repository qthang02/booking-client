export interface Bookings {
    room_type: string,
    room_number: number,
    room_id: number,
    user_id: number,
    customer_number: number,
    check_in: Date,
    check_out: Date,
    desc: string,
    status: ['pending', 'confirmed', 'canceled'],
}
