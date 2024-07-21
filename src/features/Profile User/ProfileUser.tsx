import { Button, Card, Form, Input, Spin } from "antd";

import { EditOutlined } from "@ant-design/icons";
import FooterClient from "../../components/MainLayout/footer";
import { Header } from "../../components/MainLayout/header";
import { useGetUserInfo } from "../../query/userinfor";

const UserProfile: React.FC = () => {
  const profile = useGetUserInfo(1);
  const [form] = Form.useForm();

  if (profile.isSuccess && profile.data) {
    form.setFieldsValue(profile);
    console.log(profile.data);
  }

  if (profile.isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
        <Spin size="large" />
      </div>
    );
  }

  if (profile.isError) {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
        Error: {profile.error.message}
      </div>
    );
  }

  if (profile.data && profile.data.user) {
    form.setFieldsValue(profile.data.user);
  }

  return (
    <div>
      <Header />
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <Card
          title="Thông Tin Tài Khoản"
          bordered={false}
          style={{ width: 600, borderRadius: "10px", borderColor: "#663366" }}
          headStyle={{ backgroundColor: "#663366", color: "#fff" }}
        >
          <Form 
            form={form} 
            layout="vertical"
            >
            <Form.Item
              name="username"
              label="Tên người dùng"
              rules={[{ required: true, message: "Vui lòng nhập tên người dùng!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Số điện thoại"
              rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="address"
              label="Địa chỉ"
              rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Vui lòng nhập email!" }]}
            >
              <Input />
            </Form.Item>
          </Form>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              type="primary"
              icon={<EditOutlined />}
              style={{ backgroundColor: "#663366", borderColor: "#663366" }}
            >
              Sửa
            </Button>
          </div>
        </Card>
      </div>
      <FooterClient />
    </div>
  );
};

export default UserProfile;
