// BookingHistory.tsx

import { Button, Drawer, Space, Table, Tag } from "antd";
import React, { useState } from "react";

import FooterClient from "../../components/MainLayout/footer";
import { Header } from "../../components/MainLayout/header";

interface Booking {
  key: string;
  orderId: string;
  bookingDate: string;
  receiveDate: string; // Thay đổi ngày đặt phòng thành ngày nhận phòng
  endDate: string; // Ngày trả phòng
  status: "pending" | "confirmed" | "cancelled";
  roomNumber: string;
  typeRoom: string;
  otherService: "Breakfast" | "Laundry" | "None"; // Thêm trường otherService
}

const roomPriceMap: Record<string, number> = {
  Original: 50,
  "Vip 1": 100,
  "Vip 2": 160,
  Popular: 80,
  "Separate Bed": 60,
  Deluxe: 100,
};

const BookingHistory: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Dữ liệu mẫu cho lịch sử đặt phòng của user
  const userData: Booking[] = [
    {
      key: "1",
      orderId: "DH001",
      bookingDate: "2023-06-15",
      receiveDate: "2023-06-20",
      endDate: "2023-06-25",
      status: "confirmed",
      roomNumber: "101",
      typeRoom: "Vip 1",
      otherService: "Breakfast", // Thêm dịch vụ sáng
    },
    {
      key: "2",
      orderId: "DH002",
      bookingDate: "2023-07-01",
      receiveDate: "2023-07-05",
      endDate: "2023-07-10",
      status: "pending",
      roomNumber: "202",
      typeRoom: "Popular",
      otherService: "None", // Không có dịch vụ nào
    },
    {
      key: "3",
      orderId: "DH003",
      bookingDate: "2023-07-10",
      receiveDate: "2023-07-15",
      endDate: "2023-07-20",
      status: "cancelled",
      roomNumber: "303",
      typeRoom: "Deluxe",
      otherService: "Laundry", // Dịch vụ giặt là
    },
    {
      key: "4",
      orderId: "DH004",
      bookingDate: "2023-08-05",
      receiveDate: "2023-08-10",
      endDate: "2023-08-15",
      status: "confirmed",
      roomNumber: "404",
      typeRoom: "Vip 2",
      otherService: "Breakfast",
    },
    {
      key: "5",
      orderId: "DH005",
      bookingDate: "2023-08-20",
      receiveDate: "2023-08-25",
      endDate: "2023-08-30",
      status: "pending",
      roomNumber: "505",
      typeRoom: "Separate Bed",
      otherService: "None",
    },
    {
      key: "6",
      orderId: "DH006",
      bookingDate: "2023-09-01",
      receiveDate: "2023-09-05",
      endDate: "2023-09-10",
      status: "confirmed",
      roomNumber: "606",
      typeRoom: "Original",
      otherService: "Laundry",
    },
    {
      key: "7",
      orderId: "DH007",
      bookingDate: "2023-09-15",
      receiveDate: "2023-09-20",
      endDate: "2023-09-25",
      status: "cancelled",
      roomNumber: "707",
      typeRoom: "Popular",
      otherService: "None",
    },
    {
      key: "8",
      orderId: "DH008",
      bookingDate: "2023-10-01",
      receiveDate: "2023-10-05",
      endDate: "2023-10-10",
      status: "confirmed",
      roomNumber: "808",
      typeRoom: "Deluxe",
      otherService: "Breakfast",
    },
    {
      key: "9",
      orderId: "DH009",
      bookingDate: "2023-10-15",
      receiveDate: "2023-10-20",
      endDate: "2023-10-25",
      status: "pending",
      roomNumber: "909",
      typeRoom: "Vip 1",
      otherService: "Laundry",
    },
    {
      key: "10",
      orderId: "DH010",
      bookingDate: "2023-11-01",
      receiveDate: "2023-11-05",
      endDate: "2023-11-10",
      status: "confirmed",
      roomNumber: "1010",
      typeRoom: "Original",
      otherService: "None",
    },
    // Thêm 5 dữ liệu mẫu mới
    {
      key: "11",
      orderId: "DH011",
      bookingDate: "2023-11-15",
      receiveDate: "2023-11-20",
      endDate: "2023-11-25",
      status: "cancelled",
      roomNumber: "1111",
      typeRoom: "Separate Bed",
      otherService: "Laundry",
    },
    {
      key: "12",
      orderId: "DH012",
      bookingDate: "2023-12-01",
      receiveDate: "2023-12-05",
      endDate: "2023-12-10",
      status: "confirmed",
      roomNumber: "1212",
      typeRoom: "Vip 2",
      otherService: "Breakfast",
    },
    {
      key: "13",
      orderId: "DH013",
      bookingDate: "2024-01-01",
      receiveDate: "2024-01-05",
      endDate: "2024-01-10",
      status: "pending",
      roomNumber: "1313",
      typeRoom: "Popular",
      otherService: "None",
    },
    {
      key: "14",
      orderId: "DH014",
      bookingDate: "2024-02-01",
      receiveDate: "2024-02-05",
      endDate: "2024-02-10",
      status: "confirmed",
      roomNumber: "1414",
      typeRoom: "Deluxe",
      otherService: "Breakfast",
    },
    {
      key: "15",
      orderId: "DH015",
      bookingDate: "2024-03-01",
      receiveDate: "2024-03-05",
      endDate: "2024-03-10",
      status: "cancelled",
      roomNumber: "1515",
      typeRoom: "Original",
      otherService: "None",
    },
  ];

  const columns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Ngày đặt",
      dataIndex: "bookingDate",
      key: "bookingDate",
    },
    {
      title: "Số phòng",
      dataIndex: "roomNumber",
      key: "roomNumber",
    },
    {
      title: "Loại phòng",
      dataIndex: "typeRoom",
      key: "typeRoom",
    },
    {
      title: "Dịch vụ khác",
      dataIndex: "otherService",
      key: "otherService",
      render: (otherService: Booking["otherService"]) => (
        <span>{otherService === "None" ? "Không" : otherService}</span>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: Booking["status"]) => (
        <Tag color={getStatusColor(status)}>{status.toUpperCase()}</Tag>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (text: string, record: Booking) => (
        <Space size="middle">
          <a onClick={() => showDrawer(record)}>Xem chi tiết</a>
        </Space>
      ),
    },
  ];

  const getStatusColor = (status: Booking["status"]) => {
    switch (status) {
      case "pending":
        return "orange";
      case "confirmed":
        return "green";
      case "cancelled":
        return "red";
      default:
        return "blue";
    }
  };

  const showDrawer = (record: Booking) => {
    setSelectedBooking(record);
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const calculateTotalPrice = (booking: Booking): number => {
    const pricePerDay = roomPriceMap[booking.typeRoom] || 0;
    const receiveDate = new Date(booking.receiveDate);
    const endDate = new Date(booking.endDate);
    const days = Math.ceil(
      Math.abs(endDate.getTime() - receiveDate.getTime()) / (1000 * 3600 * 24)
    );
    const totalPrice = days * pricePerDay;
    return totalPrice;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const pageSize = 5;
  const paginatedData = userData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      <Header />
      <div className="booking-history-container">
        <h1>Lịch sử đặt phòng của User</h1>
        <Table
          columns={columns}
          dataSource={paginatedData}
          pagination={{
            pageSize: pageSize,
            total: userData.length,
            onChange: handlePageChange,
          }}
        />

        <Drawer
          title="Chi tiết đơn đặt phòng"
          placement="right"
          closable={true}
          onClose={onCloseDrawer}
          visible={drawerVisible}
          width={400}
        >
          {selectedBooking && (
            <div style={{ fontSize: "18px" }}>
              <div
                className="drawer-item"
                style={{
                  border: "1px solid #1890ff",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <p>
                  <strong>Mã đơn hàng:</strong> {selectedBooking.orderId}
                </p>
              </div>
              <div
                className="drawer-item"
                style={{
                  border: "1px solid #1890ff",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <p>
                  <strong>Ngày đặt:</strong> {selectedBooking.bookingDate}
                </p>
              </div>
              <div
                className="drawer-item"
                style={{
                  border: "1px solid #1890ff",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <p>
                  <strong>Số phòng:</strong> {selectedBooking.roomNumber}
                </p>
              </div>
              <div
                className="drawer-item"
                style={{
                  border: "1px solid #1890ff",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <p>
                  <strong>Loại phòng:</strong> {selectedBooking.typeRoom}
                </p>
              </div>
              <div
                className="drawer-item"
                style={{
                  border: "1px solid #1890ff",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <p>
                  <strong>Ngày nhận phòng:</strong>{" "}
                  {selectedBooking.receiveDate}
                </p>
              </div>
              <div
                className="drawer-item"
                style={{
                  border: "1px solid #1890ff",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <p>
                  <strong>Ngày trả phòng:</strong> {selectedBooking.endDate}
                </p>
              </div>
              <div
                className="drawer-item"
                style={{
                  border: "1px solid #1890ff",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <p>
                  <strong>Giá:</strong>{" "}
                  {calculateTotalPrice(selectedBooking).toLocaleString()} $
                </p>
              </div>
              <div
                className="drawer-item"
                style={{
                  border: "1px solid #1890ff",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <p>
                  <strong>Trạng thái:</strong>{" "}
                  <Tag color={getStatusColor(selectedBooking.status)}>
                    {selectedBooking.status.toUpperCase()}
                  </Tag>
                </p>
              </div>
              <div
                className="drawer-item"
                style={{
                  border: "1px solid #1890ff",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <p>
                  <strong>Dịch vụ khác:</strong>{" "}
                  {selectedBooking.otherService === "None"
                    ? "Không"
                    : selectedBooking.otherService}
                </p>
              </div>
              {selectedBooking.status === "confirmed" && (
                <Space>
                  <Button type="primary">Gia hạn phòng</Button>
                </Space>
              )}
              {selectedBooking.status === "pending" && (
                <Space>
                  <Button type="primary">Thanh toán</Button>
                </Space>
              )}
            </div>
          )}
        </Drawer>
      </div>
      <FooterClient/>
    </div>
  );
};

export default BookingHistory;
