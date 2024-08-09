import { Button, Form, Input } from "antd";

import { EventClick } from "../../util/type";
import { User } from "../../model/profile.ts";
import { useEffect } from "react";
import { useUpdateCustomer } from "../../query/profile.ts";

export const UserProfileForm = (props: { user: User | undefined, event: EventClick, onClose: () => void }) => {
  const [form] = Form.useForm();
  const updateCustomerMutation = useUpdateCustomer();

  const onFinish = (value: User) => {
    if (props.event === "EVT_UPDATE") {
      updateCustomerMutation.mutate({
        id: props.user!.id,
        user: value
      });
    }
    props.onClose();
  };

  useEffect(() => {
    if (props.user) {
      form.setFieldsValue(props.user);
    }
  }, [props.user, form]);

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        label="Tên người dùng"
        rules={[
          { required: true, message: "Vui lòng nhập tên người dùng!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Số điện thoại"
        rules={[
          { required: true, message: "Vui lòng nhập số điện thoại!" },
        ]}
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
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Cập nhật
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserProfileForm;
