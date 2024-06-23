import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import React, { useState } from "react";

const { Option } = Select;

const Cskhbutton: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button size="large" type="primary" onClick={showDrawer}>
        Chăm sóc khách hàng
      </Button>
      <Drawer
        title="Booking"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Gửi
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
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
                  <Option value="Laundry">Room Detail</Option>
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
                    message: "please enter description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter your description"
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
