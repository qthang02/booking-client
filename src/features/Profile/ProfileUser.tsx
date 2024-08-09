import { Button, Card, Descriptions, Modal, Spin, notification } from "antd";
import React, { useState } from "react";

import { EditOutlined } from "@ant-design/icons";
import FooterClient from "../../components/MainLayout/footer";
import { Header } from "../../components/MainLayout/header";
import { User } from "../../model/profile.ts";
import UserProfileForm from "./ProfileUserForm";
import { useGetProfile } from "../../query/profile.ts";

const UserProfile: React.FC = () => {
  const { data, isLoading, isError, error } = useGetProfile();
  const [isModalVisible, setIsModalVisible] = useState(false);

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (isError) {
    notification.error({
      message: "Hiển thị thông tin người dùng thất bại",
      description: (error as Error).message,
    });
    return null;
  }

  const user: User = data as User;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Header />
      <Card
        title="Thông tin người dùng"
        bordered={false}
        style={{ width: 600, margin: "20px auto" }}
        extra={
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={showModal}
          >
            Cập nhật
          </Button>
        }
      >
        <Descriptions bordered column={1}>
          <Descriptions.Item label="Tên đăng nhập">{user.username}</Descriptions.Item>
          <Descriptions.Item label="Số điện thoại">{user.phone}</Descriptions.Item>
          <Descriptions.Item label="Địa chỉ">{user.address}</Descriptions.Item>
          <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
        </Descriptions>
      </Card>
      <FooterClient />
      <Modal
        title="Cập nhật thông tin người dùng"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <UserProfileForm user={user} event="EVT_UPDATE" onClose={handleCancel} />
      </Modal>
    </div>
  );
};

export default UserProfile;
