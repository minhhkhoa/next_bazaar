"use client";

import React from "react";
import type { FormProps } from "antd";
import { Button, Divider, Form, Input } from "antd";
import "../style.scss";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";

type FieldType = {
  username?: string;
  email?: string;
  phone?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Register() {
  return (
    <>
      <div className="w-[400px] bg-[#f3f3f3] mx-auto my-5 rounded-xl container-form-login flex flex-col items-center pb-3 px-5">
        <div className="flex flex-col items-center gap-5 ">
          <h1 className="text-4xl !font-extralight py-3">Đăng ký</h1>
          <Form
            initialValues={{ remember: false }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              name="username"
              rules={[{ required: true, message: "Hãy nhập họ tên của bạn!" }]}
              className="!w-full"
            >
              <Input placeholder="Họ tên" />
            </Form.Item>

            <Form.Item<FieldType>
              name="email"
              rules={[{ required: true, message: "Hãy nhập Email của bạn!" }]}
              className="!w-full"
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item<FieldType>
              name="phone"
              rules={[{ required: true, message: "Hãy nhập số điện thoại của bạn!" }]}
              className="!w-full"
            >
              <Input placeholder="Số điện thoại" />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: "Hãy nhập mật khẩu của bạn!" },
              ]}
            >
              <Input.Password placeholder="Mật khẩu" />
            </Form.Item>

            <Form.Item className="flex justify-center">
              <Button
                type="primary"
                htmlType="submit"
                className="!w-[300px] !bg-[#1c5b41] text-white !border-[#1c5b41] hover:!bg-white hover:!text-orange-500 hover:!border-orange-500 transition duration-300 ease-in-out !p-2"
              >
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="w-[85%] flex justify-center items-center">
          <Divider className="!my-5" />
        </div>
        <div className="text-center text-3xl bg-blend-luminosity">OR</div>

        <div className="flex flex-col gap-5 my-3">
          <div className="flex justify-center items-center gap-2 bg-[#3B5998] p-2 rounded-xl text-amber-50 w-[300px] cursor-pointer">
            <FacebookOutlined />
            FaceBook
          </div>
          <div className="flex justify-center items-center gap-2 bg-[#E14B33] p-2 rounded-xl text-amber-50 w-[300px] cursor-pointer">
            <GoogleOutlined />
            Google
          </div>
        </div>
      </div>
    </>
  );
}
