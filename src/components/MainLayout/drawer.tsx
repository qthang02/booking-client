import { Button, Col, Drawer, Form, Input, InputNumber, Row, Select, Space } from 'antd';
import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const { Option } = Select;

const Booking: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [guestNumber, setGuestNumber] = useState<number | undefined>();
  const [roomType, setRoomType] = useState<string>('');
  const [services, setServices] = useState<string[]>([]);
  const [parkingOption, setParkingOption] = useState<string>('');
  const [time, setTime] = useState<number | undefined>();
  const [description, setDescription] = useState<string>('');

  const navigate = useNavigate(); // Hook to navigate to different routes

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const bookingData = {
      guestNumber,
      roomType,
      services,
      parkingOption,
      time,
      description,
      status: "pending", // Thêm trường status: "pending"
    };

    try {
      const response = await axios.post('http://localhost:5000/api/bookings', bookingData);
      console.log('Booking saved:', response.data);

      setOpen(false); // Close the drawer after submission
      // Clear form fields after submission if needed
      setGuestNumber(undefined);
      setRoomType('');
      setServices([]);
      setParkingOption('');
      setTime(undefined);
      setDescription('');

      // Navigate to the Payment page
      navigate('/payment');
    } catch (error) {
      console.error('Error saving booking:', error);
      // Handle error, e.g., show error message to user
    }
  };

  return (
    <>
      <Button style={{ backgroundColor: "#663366" }} size="large" type="primary" onClick={showDrawer}>
        Đặt Phòng
      </Button>
      <Drawer
        title="Booking"
        width={720}
        onClose={onClose}
        visible={open}
        style={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button style={{ color: "#FF0000" }} onClick={onClose}>Cancel</Button>
            <Button style={{ backgroundColor: "#663366" }} onClick={handleSubmit}  type="primary">
              Xác nhận
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="guestNumber"
                label="Số Người"
                rules={[{ required: true, message: 'Vui lòng nhập số người' }]}
              >
                <Input
                  placeholder="Nhập số người"
                  value={guestNumber}
                  onChange={(e) => setGuestNumber(parseInt(e.target.value, 10))}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="roomType"
                label="Loại Phòng"
                rules={[{ required: true, message: 'Vui lòng chọn loại phòng' }]}
              >
                <Select
                  placeholder="Chọn loại phòng"
                  value={roomType}
                  onChange={(value) => setRoomType(value)}
                >
                  <Option value="VIP1">VIP 1</Option>
                  <Option value="VIP2">VIP 2</Option>
                  <Option value="POPULAR">Popular</Option>
                  <Option value="DELUXE">Deluxe</Option>
                  <Option value="SEPARATEBED">Separate Bed</Option>
                  <Option value="ORIGINAL">Original</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="services"
                label="Các dịch vụ khác"
                rules={[{ required: true, message: 'Vui lòng chọn các dịch vụ' }]}
              >
                <Select
                  mode="multiple"
                  placeholder="Chọn các dịch vụ"
                  value={services}
                  onChange={(value) => setServices(value)}
                >
                  <Option value="Breakfast">Breakfast</Option>
                  <Option value="Laundry">Laundry</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="parkingOption"
                label="Đỗ xe ô tô"
                rules={[{ required: true, message: 'Vui lòng chọn tình trạng đỗ xe' }]}
              >
                <Select
                  placeholder="Chọn tình trạng đỗ xe"
                  value={parkingOption}
                  onChange={(value) => setParkingOption(value)}
                >
                  <Option value="yes">Có</Option>
                  <Option value="no">Không</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="time"
                label="Thời Gian"
                rules={[
                  { required: true, message: 'Vui lòng nhập thời gian' },
                  { type: 'number', message: 'Vui lòng nhập số' },
                ]}
              >
                <InputNumber
                  style={{ width: '100%' }}
                  value={time}
                  onChange={(value) => setTime(value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name="description"
                label="Ghi Chú"
                rules={[{ required: true, message: 'Vui lòng nhập ghi chú' }]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Nhập ghi chú"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default Booking;
