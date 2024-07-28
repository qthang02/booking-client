import { Button, Form, Input, Select, Space } from "antd";

import FooterClient from "../../components/MainLayout/footer";
import { Header } from "../../components/MainLayout/header";
import React from "react";
import { RegisterRequset } from "../../model/authen";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../query/authen";

const { Option } = Select;

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const registerMutation = useRegister();

  const onFinish = (values: RegisterRequset) => {
    registerMutation.mutate(values, {
      onSuccess: () => {
        navigate("/login");
      },
      onError: () => {
        console.log("Đăng ký thất bại");
      },
    });
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-screen">
        <div>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#663366",
              fontWeight: "bold",
              fontSize: "xx-large",
              marginTop: "20px",
            }}
          >
            Đăng Ký
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Space direction="vertical" size="large">
            <Form
              name="register"
              form={form}
              onFinish={onFinish}
              style={{
                width: 500,
                padding: "20px",
                border: "1px solid #e8e8e8",
                borderRadius: "5px",
              }}
              scrollToFirstError
            >
              <Form.Item
                name="username"
                label="Tên người dùng"
                rules={[{ required: true, message: "Vui lòng nhập tên người dùng!" }]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  { type: "email", message: "Địa chỉ email không hợp lệ!" },
                  { required: true, message: "Vui lòng nhập email!" },
                ]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                name="password"
                label="Mật khẩu"
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
                hasFeedback
              >
                <Input.Password size="large" />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Xác nhận mật khẩu"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  { required: true, message: "Vui lòng xác nhận mật khẩu!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("Mật khẩu không khớp!"));
                    },
                  }),
                ]}
              >
                <Input.Password size="large" />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại!" },
                ]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                name="gender"
                label="Giới tính"
                rules={[
                  { required: true, message: "Vui lòng chọn giới tính!" },
                ]}
              >
                <Select placeholder="Chọn giới tính" size="large">
                  <Option value={true}>Nam</Option>
                  <Option value={false}>Nữ</Option>
                 
                </Select>
              </Form.Item>

              <Form.Item
                name="address"
                label="Địa chỉ"
                rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item style={{ textAlign: "center" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  style={{ backgroundColor: "#663366", borderColor: "#663366" }}
                >
                  Đăng Ký
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </div>
      </div>
      <FooterClient />
    </div>
  );
};

export default Register;
