import { Button, Card, Divider, message } from "antd";
import React, { useEffect, useState } from "react";

import FooterClient from "../../components/MainLayout/footer";
import { Header } from "../../components/MainLayout/header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Booking {
  id: number;
  guestNumber: number;
  roomType: string;
  services: string[];
  parkingOption: string;
  time: number;
  description: string;
  totalPrice: number;
  status: string;
}

const Payment: React.FC = () => {
  const [latestBooking, setLatestBooking] = useState<Booking | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/bookings");
        const allBookings: Booking[] = response.data;
        if (allBookings.length > 0) {
          const newestBooking = allBookings[allBookings.length - 1];
          setLatestBooking(newestBooking);
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const handleDeposit = async () => {
    if (!latestBooking) {
      console.error("Error: No booking found.");
      return;
    }

    try {
      const updatedBooking = { ...latestBooking, status: "Confirmed" };
      await axios.put(`http://localhost:5000/api/bookings/${latestBooking.id}`, updatedBooking);
      message.success("Đã đặt cọc thành công!");
      navigate("/");
    } catch (error) {
      console.error("Error confirming booking:", error);
      message.error("Không thể xác nhận đặt cọc. Vui lòng thử lại sau.");
    }
  };

  const handleCancel = async () => {
    if (!latestBooking) {
      console.error("Error: No booking found.");
      return;
    }

    try {
      const updatedBooking = { ...latestBooking, status: "cancelled" };
      await axios.put(`http://localhost:5000/api/bookings/${latestBooking.id}`, updatedBooking);
      message.success("Đã hủy đặt phòng thành công!");
      navigate("/categories");
    } catch (error) {
      console.error("Error cancelling booking:", error);
      message.error("Không thể hủy đặt phòng. Vui lòng thử lại sau.");
    }
  };

  if (!latestBooking) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          flexDirection: "column",
        }}
      >
        <Card title="Thông Tin Đặt Phòng" style={{ width: 600 }}>
          <p>
            <strong>Số Người:</strong> {latestBooking.guestNumber}
          </p>
          <Divider />
          <p>
            <strong>Loại Phòng:</strong> {latestBooking.roomType}
          </p>
          <Divider />
          <p>
            <strong>Dịch Vụ:</strong> {latestBooking.services.join(", ")}
          </p>
          <Divider />
          <p>
            <strong>Đỗ Xe:</strong> {latestBooking.parkingOption === "yes" ? "Có" : "Không"}
          </p>
          <Divider />
          <p>
            <strong>Thời Gian:</strong> {latestBooking.time} ngày
          </p>
          <Divider />
          <p>
            <strong>Ghi Chú:</strong> {latestBooking.description}
          </p>
          <Divider />
          <p>
            <strong>Tổng Tiền:</strong> ${latestBooking.totalPrice}
          </p>
        </Card>
        <div style={{ marginTop: 24 }}>
          <Button type="primary" onClick={handleDeposit} style={{ marginRight: 16 }}>
            Đặt Cọc
          </Button>
          <Button danger onClick={handleCancel}>
            Hủy
          </Button>
        </div>
      </div>
      <FooterClient />
    </div>
  );
};

export default Payment;