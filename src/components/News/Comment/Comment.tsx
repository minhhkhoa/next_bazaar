import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
const { TextArea } = Input;

type FieldType = {
  username?: string;
  email?: string;
  content?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Comment: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    className="w-full flex flex-col"
  >
    <div className="flex !flex-row md:flex-col gap-5">
      <Form.Item<FieldType>
        style={{ width: "37%" }}
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="Họ và tên" />
      </Form.Item>

      <Form.Item<FieldType>
        style={{ width: "40%" }}
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>
    </div>

    <Form.Item<FieldType>
      name="content"
      rules={[{ required: true, message: "Please input your content!" }]}
    >
      <TextArea placeholder="Nội dung" />
    </Form.Item>

    <Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        className="!bg-orange-500 text-white !border-orange-500 hover:!bg-white hover:!text-orange-500 hover:!border-orange-500 transition duration-300 
        ease-in-out"
      >
        Gửi thông tin
      </Button>
    </Form.Item>
  </Form>
);

export default Comment;
