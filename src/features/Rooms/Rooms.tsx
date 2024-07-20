import { Card, Col, Row } from "antd";

import Booking from "../../components/MainLayout/drawer";
import FooterClient from "../../components/MainLayout/footer";
import { Header } from "../../components/MainLayout/header";
import React from "react";

const { Meta } = Card;

const RoomList: React.FC = () => {
  // Danh sách phòng được phân loại theo các danh mục
  const categories = [
    {
      category: "Standard Rooms",
      rooms: [
        {
          id: 1,
          name: "Original",
          image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/252155037.jpg?k=1c5b6cc7d16c613ba1db96c0f9bb1a5f1b4bf4ea0fff5bccbf632f628aa8a2db&o=&hp=1",
          price: "$50 / 1d",
          description: "Phòng Thường",
          availableRooms: 50, // Số phòng khả dụng
        },
        {
          id: 4,
          name: "Popular",
          image: "https://images.trvl-media.com/lodging/1000000/180000/178700/178621/974841f7.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          price: "$80 / 1d",
          description: "Phòng Phổ Biến",
          availableRooms: 30, // Số phòng khả dụng
        },
        {
          id: 5,
          name: "Separate Bed",
          image: "https://q-xx.bstatic.com/xdata/images/hotel/max500/143102701.jpg?k=e663d378cdba78e246bd2460be4b9865b825009af5d5d8145e1051890584ae4b&o=&s=312x",
          price: "$60 / 1d",
          description: "Phòng có giường ngăn cách",
          availableRooms: 20, // Số phòng khả dụng
        },
      ],
    },
    {
      category: "VIP Rooms",
      rooms: [
        {
          id: 2,
          name: "VIP 1",
          image: "https://luxuo.vn/wp-content/uploads/2020/08/pullman-phu-quoc-deluxe-room-1.jpg",
          price: "$100 / 1d",
          description: "Phòng VIP 1",
          availableRooms: 20, // Số phòng khả dụng
        },
        {
          id: 3,
          name: "VIP 2",
          image: "https://pullmanphuquoc.com/wp-content/uploads/sites/225/2020/06/1823_Suite-Ocean-View_1-1.jpg",
          price: "$160 / 1d",
          description: "Phòng VIP 2",
          availableRooms: 20, // Số phòng khả dụng
        },
      ],
    },
    {
      category: "Deluxe Rooms",
      rooms: [
        {
          id: 6,
          name: "Deluxe",
          image: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/83/2016/12/06090935/14-Executive-Suite-31-370x276.jpg",
          price: "$100 / 1d",
          description: "Phòng Deluxe",
          availableRooms: 30, // Số phòng khả dụng
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        {categories.map((category) => (
          <div key={category.category}>
            <h2>{category.category}</h2>
            <Row gutter={16}>
              {category.rooms.map((room) => (
                <Col span={8} key={room.id}>
                  <Card
                    hoverable
                    cover={<img alt={room.name} src={room.image} style={{ objectFit: "cover", height: "300px" }} />}
                    style={{ marginBottom: "16px" }}
                  >
                    <Meta title={room.name} description={room.price} />
                    <p>{room.description}</p>
                    <p>Số phòng khả dụng: {room.availableRooms}</p>
                    <Booking/>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </div>
      <FooterClient/>
    </div>
  );
};

export default RoomList;