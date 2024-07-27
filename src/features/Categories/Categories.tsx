import { Card, Col, Row, Spin } from "antd";

import Booking from "../../components/MainLayout/drawer";
import FooterClient from "../../components/MainLayout/footer";
import { Header } from "../../components/MainLayout/header";
import React from "react";
import { useListCategories } from "../../query/catgories";

const { Meta } = Card;

const RoomList: React.FC = () => {
  const { data: categories, isLoading, isError } = useListCategories();

  if (isLoading) {
    return <Spin />;
  }

  if (isError) {
    return <div>Đã có lỗi xảy ra khi tải danh sách categories.</div>;
  }

  if (!categories || !Array.isArray(categories)) {
    return <div>Không có danh mục nào để hiển thị.</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={[16, 16]}>
          {categories.map((category) => (
            <Col span={8} key={category.ID}>
              <Card
                hoverable
                cover={
                  <img
                    alt={category.name}
                    src={category.image_link}
                    style={{ objectFit: "cover", height: "300px" }}
                  />
                }
                style={{ marginBottom: "16px" }}
              >
                <Meta
                  title={category.name}
                  description={`Giá: ${category.price} / 1d`}
                />
                <p>{category.description}</p>
                <p>Số phòng khả dụng: {category.available_rooms}</p>
                <Booking />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <FooterClient />
    </div>
  );
};

export default RoomList;
