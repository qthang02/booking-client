import {Button, Card, Col, DatePicker, Drawer, Form, Input, InputNumber, message, Row, Select, Spin} from "antd";

import FooterClient from "../../components/MainLayout/footer";
import { Header } from "../../components/MainLayout/header";
import React, {useState} from "react";
import { useListCategories } from "../../query/catgories";
import {Categories} from "../../model/categories.ts";
import {useForm} from "antd/es/form/Form";
import {Rooms} from "../../model/rooms.ts";
import {useGetProfile} from "../../query/authen.ts";
import {useCreateOrder} from "../../query/bookings.ts";
import axios from "axios";

const { Meta } = Card;

const RoomList: React.FC = () => {
  const { data: categories, isLoading, isError } = useListCategories();
  const [open, setOpen] = useState(false);
  const [form] = useForm();
  const [category, setCategory] = useState<Categories>();
  const [daysDifference, setDaysDifference] = useState(1);
  const [roomNumber, setRoomNumber] = useState<number>(0);
  const useProfile = useGetProfile();
  const createOrder = useCreateOrder();
  const onClose = () => {
      setOpen(false);
      form.resetFields();
  };

  if (isLoading) {
    return <Spin />;
  }

  if (isError) {
    return <div>Đã có lỗi xảy ra khi tải danh sách categories.</div>;
  }

  if (!categories || !Array.isArray(categories)) {
    return <div>Không có danh mục nào để hiển thị.</div>;
  }

  const handleOrder = (category: Categories) => {
      setCategory(category);
      setOpen(true);
  }

    const roomSelectedHandle = (rooms: Rooms[]): { value: number; label: string }[] => {
        return rooms.map(room => ({
            value: room.roomNumber,
            label: room.roomNumber.toString()
        }));
    }


    const onCheckinChange = (value: moment.Moment | null) => {
        const checkoutDate = form.getFieldValue('Checkout');
        if (value && checkoutDate) {
            const diff = checkoutDate.diff(value, 'days');
            setDaysDifference(diff);
        } else {
            setDaysDifference(0);
        }
    };

    const onCheckoutChange = (value: moment.Moment | null) => {
        const checkinDate = form.getFieldValue('Checkin');
        if (value && checkinDate) {
            const diff = value.diff(checkinDate, 'days');
            setDaysDifference(diff);
        } else {
            setDaysDifference(0);
        }
    };

    const onFinish = () => {
        if (useProfile.data && useProfile.isSuccess) {
            const checkinDate = form.getFieldValue("Checkin");
            const checkoutDate = form.getFieldValue("Checkout");

            createOrder.mutate({
                price: form.getFieldValue("price") * daysDifference,
                guestNumber: form.getFieldValue("GuestNumber"),
                categoryType: form.getFieldValue("type"),
                checkin: checkinDate ? checkinDate.toISOString() : null,
                checkout: checkoutDate ? checkoutDate.toISOString() : null,
                roomNumber: roomNumber,
                userID: useProfile.data?.id,
                description: "",
                status: 1
            }, {
                onSuccess: () => {
                    const amount =form.getFieldValue("price") * daysDifference * 1000;
                    const orderInfo = `booking ${form.getFieldValue("type")}`;

                    axios.get("http://localhost:8080/api/v1/payment/create-payment", {
                        params: { amount, orderInfo }
                    })
                        .then(response => {
                            const { paymentURL } = response.data;
                            if (paymentURL) {
                                message.success('Đặt phòng thành công. Đang chuyển hướng đến trang thanh toán...');
                                window.location.href = paymentURL;
                            } else {
                                message.error('Không nhận được URL thanh toán');
                            }
                        })
                        .catch(error => {
                            console.error('Error creating payment:', error);
                            message.error('Có lỗi xảy ra khi tạo thanh toán. Vui lòng thử lại.');
                        });
                },
                onError: (error) => {
                    console.error('Error creating order:', error);
                    message.error('Có lỗi xảy ra khi đặt phòng. Vui lòng thử lại.');
                }
            });
        }
    };

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
                  description={`Price: ${category.price} VND/1 day`}
                />
                <p>{category.description}</p>
                <p>Số phòng khả dụng: {category.available_rooms}</p>
                <Button onClick={() =>  handleOrder(category)} disabled={category.available_rooms === 0}>
                    Đặt Phòng
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
          <Drawer title="Order" onClose={onClose} open={open}>
              <Form
                  form={form}
                  initialValues={category}
                  onFinish={onFinish}
              >
                  <Form.Item label={"Room Number"}>
                      <Select
                          onChange={(value) => setRoomNumber(value)}
                          options={roomSelectedHandle(category?.rooms || [])}
                      />
                  </Form.Item>
                  <Form.Item name={"type"} label={"Room type"}>
                      <Input disabled={true} />
                  </Form.Item>
                  <Form.Item name={"GuestNumber"} label={"Guest number"}>
                      <InputNumber defaultValue={1} />
                  </Form.Item>
                  <Form.Item name="Checkin" label="Checkin">
                      <DatePicker
                          showTime
                          onChange={onCheckinChange}
                      />
                  </Form.Item>
                  <Form.Item name="Checkout" label="Checkout">
                      <DatePicker
                          showTime
                          onChange={onCheckoutChange}
                      />
                  </Form.Item>
                  <Form.Item label="Days">
                      <Input value={daysDifference !== null ? `${daysDifference} days` : ''} readOnly />
                  </Form.Item>
`
                  <Form.Item>
                      <Button type="primary" htmlType="submit">
                          Booking
                      </Button>
                  </Form.Item>
              </Form>
          </Drawer>
      </div>
      <FooterClient />
    </div>
  );
};

export default RoomList;
