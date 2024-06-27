import { Button, Col, Drawer, Form, Input, Row, Select, Space } from "antd";
import React, { useState } from "react";

import axios from "axios";

const { Option } = Select;

interface CustomerCareFormData {
  username: string;
  email: string;
  oldmember: string;
  otherservice: string;
  description: string;
}

const Cskhbutton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm<CustomerCareFormData>(); // Use form hook for form control

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    form.resetFields(); // Reset form fields on drawer close
  };

  const handleSubmit = async (values: CustomerCareFormData) => {
    try {
      const response = await axios.post("http://localhost:5000/api/customercare", values);
      console.log("Customer care submitted:", response.data);
      setOpen(false); // Close the drawer after submission
      form.resetFields(); // Reset form fields after submission
      // Show success message
      alert("Gửi thành công");
    } catch (error) {
      console.error("Error submitting customer care:", error);
      // Handle error, e.g., show error message to user
      alert("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };

  return (
    <>
      <Button size="large" type="primary" onClick={showDrawer}>
        Chăm sóc khách hàng
      </Button>
      <Drawer
        title="Chăm sóc khách hàng"
        width={720}
        onClose={onClose}
        visible={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              onClick={() => {
                form.submit();
              }}
              type="primary"
            >
              Gửi
            </Button>
          </Space>
        }
      >
        <Form
          form={form}
          layout="vertical"
          hideRequiredMark
          onFinish={handleSubmit} // Use onFinish to handle form submission
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="username"
                label="Họ Tên"
                rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
              >
                <Input placeholder="Vui lòng nhập họ tên" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Vui lòng nhập email" },
                  { type: "email", message: "Định dạng email không đúng" },
                ]}
              >
                <Input placeholder="Vui lòng nhập email" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="oldmember"
                label="Bạn đã từng sử dụng dịch vụ ở Shelby"
                rules={[{ required: true, message: "Vui lòng chọn" }]}
              >
                <Select placeholder="Vui lòng chọn">
                  <Option value="Yes">Có</Option>
                  <Option value="No">Không</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="otherservice"
                label="Bạn cần thông tin chi tiết về các loại dịch vụ ở Shelby?"
                rules={[{ required: true, message: "Vui lòng chọn" }]}
              >
                <Select placeholder="Vui lòng chọn">
                  <Option value="Breakfast">Breakfast</Option>
                  <Option value="Laundry">Laundry</Option>
                  <Option value="Roomdetail">Room Detail</Option>
                  <Option value="Qualification">Qualification</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Hãy đặt câu hỏi ở đây:"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập câu hỏi của bạn",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Nhập câu hỏi của bạn"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default Cskhbutton;
