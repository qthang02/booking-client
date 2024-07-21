import { Button, Form, Input, Space } from "antd";
import React, { useEffect } from "react";
import { useBearStore, useTokenStore } from "../../storage/zustand";

import FooterClient from "../../components/MainLayout/footer";
import { Header } from "../../components/MainLayout/header";
import { LoginRequest } from "../../model/authen";
import { useLogin } from "../../query/authen";

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const loginMutation = useLogin();
  const token = useTokenStore();
  const onFinish = (values: LoginRequest) => {
    loginMutation.mutate(values);
  };
  
  useEffect(() => {
    console.log("token: " + token.getState());


    
  }, [loginMutation]);



  return (
    <div className="flex flex-col min-h-screen">
      <Header />
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
        Đăng Nhập
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <Space direction="vertical" size="large">
          <Form
            name="login"
            form={form}
            onFinish={onFinish}
            style={{ width: 500, padding: "20px", borderRadius: "5px" }}
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                { type: "email", message: "The input is not valid E-mail!" },
                { required: true, message: "Please input your E-mail!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>

            <Form.Item style={{ textAlign: "center" }}>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                style={{ backgroundColor: "#663366", borderColor: "#663366" }}
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
      <FooterClient />
    </div>
  );
};

export default Login;