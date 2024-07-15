export interface Bookings {
    room_type: string,
    room_number: number,
    room_id: number,
    user_id: number,
    status: ['pending', 'confirmed', 'canceled'],
}
