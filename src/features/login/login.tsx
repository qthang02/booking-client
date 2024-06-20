import { Button, Form, Input, Space } from "antd";

import React from "react";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 6,
    },
  },
};

const Login: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    console.log("Received values of form: ");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Space direction="vertical" size="large">
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#3572EF",
            fontWeight: "bold",
            fontSize: "xx-large",
          }}
        >
          Shelby Hotel
        </h1>
        <Form
          {...formItemLayout}
          form={form}
          name="login"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          style={{
            width: 500,
            padding: "20px",
            borderRadius: "5px",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item {...tailFormItemLayout} style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit" size="large">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </div>
  );
};

export default Login;
