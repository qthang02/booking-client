import { Button, Checkbox, Form, Input, Select, Space } from "antd";

import FooterClient from "../../components/MainLayout/footer";
import { Header } from "../../components/MainLayout/header";
import React from "react";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    console.log("Received values of form: ");
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
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
            name="register"
            onFinish={onFinish}
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86",
            }}
            style={{
              width: 500,
              padding: "20px",
              border: "1px solid #e8e8e8",
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
              hasFeedback
            >
              <Input.Password size="large" />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The passwords that you entered do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true, message: "Please select gender!" }]}
            >
              <Select placeholder="Select your gender" size="large">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error("You must accept the agreement")
                        ),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I have read the <a href="/">agreement</a>
              </Checkbox>
            </Form.Item>

            <Form.Item {...tailFormItemLayout} style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit" size="large">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
      <FooterClient />
    </div>
  );
};

export default Register;
