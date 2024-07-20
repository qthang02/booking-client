// import { Button, Drawer, Table, Tag } from "antd";
// import React, { useEffect, useState } from "react";

// import FooterClient from "../../components/MainLayout/footer";
// import { Header } from "../../components/MainLayout/header";
// import axios from "axios";

// interface Booking {
//   orderId: string;
//   roomNumber: string;
//   guestNumber: number;
//   roomType: string;
//   services: string[];
//   parkingOption: string;
//   time: number;
//   description: string;
//   status: "pending" | "confirmed" | "cancelled";
//   totalPrice: number;
//   bookingDate: string;
// }

// const getStatusColor = (status: Booking["status"]) => {
//   switch (status) {
//     case "pending":
//       return "orange";
//     case "confirmed":
//       return "green";
//     case "cancelled":
//       return "red";
//     default:
//       return "green";
//   }
// };

// const formatDate = (dateString: string) => {
//   const date = new Date(dateString);
//   const day = String(date.getDate()).padStart(2, "0");
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// };

// const BookingHistory: React.FC = () => {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
//   const [drawerVisible, setDrawerVisible] = useState(false);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/bookings");
//         setBookings(response.data);
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//       }
//     };

//     fetchBookings();
//   }, []);

//   const showDrawer = (booking: Booking) => {
//     setSelectedBooking(booking);
//     setDrawerVisible(true);
//   };

//   const onClose = () => {
//     setDrawerVisible(false);
//     setSelectedBooking(null);
//   };

//   const columns = [
//     {
//       title: "Mã Đơn Hàng",
//       dataIndex: "orderId",
//       key: "orderId",
//     },
//     {
//       title: "Số Phòng",
//       dataIndex: "roomNumber",
//       key: "roomNumber",
//     },
//     {
//       title: "Số Người",
//       dataIndex: "guestNumber",
//       key: "guestNumber",
//     },
//     {
//       title: "Loại Phòng",
//       dataIndex: "roomType",
//       key: "roomType",
//     },
//     {
//       title: "Trạng Thái",
//       dataIndex: "status",
//       key: "status",
//       render: (status: Booking["status"]) => (
//         <Tag color={getStatusColor(status)}>{status.toUpperCase()}</Tag>
//       ),
//     },
//     {
//       title: "Tổng Tiền",
//       dataIndex: "totalPrice",
//       key: "totalPrice",
//       render: (totalPrice: number) => `${totalPrice} $`,
//     },
//     {
//       title: "Thao Tác",
//       key: "action",
//       render: (text: string, record: Booking) => (
//         <Button type="primary" onClick={() => showDrawer(record)}>
//           Xem Chi Tiết
//         </Button>
//       ),
//     },
//   ];

//   return (
//     <div>
//       <Header />
//       <Table columns={columns} dataSource={bookings} rowKey="orderId" />
//       <Drawer
//         title="Chi Tiết Đơn Hàng"
//         width={720}
//         onClose={onClose}
//         open={drawerVisible}
//         style={{ paddingBottom: 80 }}
//         bodyStyle={{ padding: "24px", backgroundColor: "#f9f9f9" }}
//       >
//         {selectedBooking && (
//           <div style={{ color: "#663366" }}>
//             <div
//               style={{
//                 textAlign: "center",
//                 marginBottom: "24px",
//                 fontSize: "24px",
//                 fontWeight: "bold",
//                 border: "2px solid #663366",
//                 padding: "12px",
//                 borderRadius: "8px",
//               }}
//             >
//               Mã Đơn Hàng: {selectedBooking.orderId}
//             </div>
//             <div
//               style={{
//                 border: "2px solid #663366",
//                 padding: "12px",
//                 borderRadius: "8px",
//                 marginBottom: "16px",
//               }}
//             >
//               <strong>Số Phòng:</strong> {selectedBooking.roomNumber}
//             </div>
//             <div
//               style={{
//                 border: "2px solid #663366",
//                 padding: "12px",
//                 borderRadius: "8px",
//                 marginBottom: "16px",
//               }}
//             >
//               <strong>Số Người:</strong> {selectedBooking.guestNumber}
//             </div>
//             <div
//               style={{
//                 border: "2px solid #663366",
//                 padding: "12px",
//                 borderRadius: "8px",
//                 marginBottom: "16px",
//               }}
//             >
//               <strong>Loại Phòng:</strong> {selectedBooking.roomType}
//             </div>
//             <div
//               style={{
//                 border: "2px solid #663366",
//                 padding: "12px",
//                 borderRadius: "8px",
//                 marginBottom: "16px",
//               }}
//             >
//               <strong>Các Dịch Vụ:</strong> {selectedBooking.services.join(", ")}
//             </div>
//             <div
//               style={{
//                 border: "2px solid #663366",
//                 padding: "12px",
//                 borderRadius: "8px",
//                 marginBottom: "16px",
//               }}
//             >
//               <strong>Đỗ Xe Ô Tô:</strong> {selectedBooking.parkingOption === "yes" ? "Có" : "Không"}
//             </div>
//             <div
//               style={{
//                 border: "2px solid #663366",
//                 padding: "12px",
//                 borderRadius: "8px",
//                 marginBottom: "16px",
//               }}
//             >
//               <strong>Thời Gian:</strong> {selectedBooking.time} ngày
//             </div>
//             <div
//               style={{
//                 border: "2px solid #663366",
//                 padding: "12px",
//                 borderRadius: "8px",
//                 marginBottom: "16px",
//               }}
//             >
//               <strong>Ghi Chú:</strong> {selectedBooking.description}
//             </div>
//             <div
//               style={{
//                 border: "2px solid #663366",
//                 padding: "12px",
//                 borderRadius: "8px",
//                 marginBottom: "16px",
//               }}
//             >
//               <strong>Trạng Thái:</strong>{" "}
//               <Tag color={getStatusColor(selectedBooking.status)}>
//                 {selectedBooking.status.toUpperCase()}
//               </Tag>
//             </div>
//             <div
//               style={{
//                 border: "2px solid #663366",
//                 padding: "12px",
//                 borderRadius: "8px",
//                 marginBottom: "16px",
//               }}
//             >
//               <strong>Tổng Tiền:</strong> {selectedBooking.totalPrice} $
//             </div>
//             <div
//               style={{
//                 border: "2px solid #663366",
//                 padding: "12px",
//                 borderRadius: "8px",
//                 marginBottom: "16px",
//               }}
//             >
//               <strong>Ngày Đặt:</strong> {formatDate(selectedBooking.bookingDate)}
//             </div>
//           </div>
//         )}
//       </Drawer>
//       <FooterClient />
//     </div>
//   );
// };

// export default BookingHistory;

import { Button, Card, Drawer, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";

import FooterClient from "../../components/MainLayout/footer";
import { Header } from "../../components/MainLayout/header";
import axios from "axios";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

interface Booking {
  orderId: string;
  roomNumber: string;
  guestNumber: number;
  roomType: string;
  services: string[];
  parkingOption: string;
  time: number;
  description: string;
  status: "pending" | "confirmed" | "cancelled";
  totalPrice: number;
  bookingDate: string;
}

const getStatusColor = (status: Booking["status"]) => {
  switch (status) {
    case "pending":
      return "orange";
    case "confirmed":
      return "green";
    case "cancelled":
      return "red";
    default:
      return "green";
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const BookingHistory: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/bookings");
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const showDrawer = (booking: Booking) => {
    setSelectedBooking(booking);
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
    setSelectedBooking(null);
  };

  const columns = [
    {
      title: "Mã Đơn Hàng",
      dataIndex: "orderId",
      key: "orderId",
      width: "100px",
    },
    {
      title: "Số Phòng",
      dataIndex: "roomNumber",
      key: "roomNumber",
      width: "100px",
    },
    {
      title: "Số Người",
      dataIndex: "guestNumber",
      key: "guestNumber",
      width: "100px",
    },
    {
      title: "Loại Phòng",
      dataIndex: "roomType",
      key: "roomType",
      width: "100px",
    },
    {
      title: "Trạng Thái",
      dataIndex: "status",
      key: "status",
      width: "100px",
      render: (status: Booking["status"]) => (
        <Tag color={getStatusColor(status)}>{status.toUpperCase()}</Tag>
      ),
    },
    {
      title: "Tổng Tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      width: "100px",
      render: (totalPrice: number) => `${totalPrice} $`,
    },
    {
      title: "Thao Tác",
      key: "action",
      width: "100px",
      render: (text: string, record: Booking) => (
        <Button type="primary" onClick={() => showDrawer(record)}>
          Xem Chi Tiết
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Header />
      <Card>
        <Table columns={columns} dataSource={bookings} rowKey="orderId" />
        <Drawer
          title="Chi Tiết Đơn Hàng"
          onClose={onClose}
          open={drawerVisible}
          style={{ paddingBottom: 80 }}
          bodyStyle={{ padding: "0", backgroundColor: "#f9f9f9" }}
        >
          {selectedBooking && (
            <div style={{ color: "#663366" }}>
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "24px",
                  fontSize: "24px",
                  fontWeight: "bold",
                  border: "2px solid #663366",  
                  borderRadius: "8px",
                }}
              >
                Mã Đơn Hàng: {selectedBooking.orderId}
              </div>
              <div
                style={{
                  border: "2px solid #663366",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              >
                <strong>Số Phòng:</strong> {selectedBooking.roomNumber}
              </div>
              <div
                style={{
                  border: "2px solid #663366",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              >
                <strong>Số Người:</strong> {selectedBooking.guestNumber}
              </div>
              <div
                style={{
                  border: "2px solid #663366",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              >
                <strong>Loại Phòng:</strong> {selectedBooking.roomType}
              </div>
              <div
                style={{
                  border: "2px solid #663366",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              >
                <strong>Các Dịch Vụ:</strong>{" "}
                {selectedBooking.services.join(", ")}
              </div>
              <div
                style={{
                  border: "2px solid #663366",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              >
                <strong>Đỗ Xe Ô Tô:</strong>{" "}
                {selectedBooking.parkingOption === "yes" ? "Có" : "Không"}
              </div>
              <div
                style={{
                  border: "2px solid #663366",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              >
                <strong>Thời Gian:</strong> {selectedBooking.time} ngày
              </div>
              <div
                style={{
                  border: "2px solid #663366",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              >
                <strong>Ghi Chú:</strong> {selectedBooking.description}
              </div>
              <div
                style={{
                  border: "2px solid #663366",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              >
                <strong>Trạng Thái:</strong>{" "}
                <Tag color={getStatusColor(selectedBooking.status)}>
                  {selectedBooking.status.toUpperCase()}
                </Tag>
              </div>
              <div
                style={{
                  border: "2px solid #663366",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              >
                <strong>Tổng Tiền:</strong> {selectedBooking.totalPrice} $
              </div>
              <div
                style={{
                  border: "2px solid #663366",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              >
                <strong>Ngày Đặt:</strong>{" "}
                {formatDate(selectedBooking.bookingDate)}
              </div>
            </div>
          )}
        </Drawer>
      </Card>
      <FooterClient />
    </div>
  );
};

export default BookingHistory;
