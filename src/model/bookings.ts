

export interface Bookings {
    guestNumber: number,
    price: number,
    description: string,
    categoryType: number,
    checkin: Date,
    checkout: Date,
    roomNumber: number,
    userID: number,
    status: number
}

export interface CreateOrderRequest {
    order: Bookings
}

export type BookingType =
    "Confirmed" |
    "Pending" |
    "Canceled";
export interface ListOrdersResponse {
    order: Bookings[];
}