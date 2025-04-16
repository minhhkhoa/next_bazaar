"use client";

import {
  EnvironmentOutlined,
  PhoneOutlined,
  SendOutlined,
} from "@ant-design/icons";

import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import GoogleMapComponent from "@/components/GoogleMap/GoogleMapComponent";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function PageLienHe() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 px-30 p-4">
        {/* khối trái */}
        <div className="flex-1">
          {/* khối thông tin */}
          <div>
            <span className="text-[#1c5b41] text-2xl font">
              Công ty TNHH thời trang Alena
            </span>
            <div>
              <div className="flex flex-col gap-3 mt-5">
                <div className="flex items-center gap-5">
                  <EnvironmentOutlined
                    style={{ fontSize: "30px", color: "#1c5b41" }}
                  />
                  <span>
                    <b>Địa chỉ:</b> Tầng 6, Tòa nhà Ladeco, 266 Đội Cấn, Phường
                    Liễu Giai, Quận Ba Đình, TP Hà Nội
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <SendOutlined
                    style={{ fontSize: "30px", color: "#1c5b41" }}
                  />
                  <span>
                    <b>Email: </b>
                    <span className="hover:text-[#1c5b41]">
                      khoalon89@gmail.com
                    </span>
                  </span>
                </div>
                <div className="flex gap-5">
                  <PhoneOutlined
                    style={{ fontSize: "30px", color: "#1c5b41" }}
                  />
                  <div className="flex items-center gap-1.5">
                    <b>Hotline: </b>
                    <b className="text-lg">1900 9999</b>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* khối form */}
          <div className="mt-10">
            <span className="text-[#1c5b41] text-2xl font">
              Liên hệ với chúng tôi
            </span>
            <Form
              name="basic"
              style={{ width: "100%" }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="Họ và tên" />
              </Form.Item>

              <Form.Item<FieldType>
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item<FieldType>
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input placeholder="Số điện thoại" />
              </Form.Item>

              <Form.Item
                name="TextArea"
                rules={[{ required: true, message: "Please input!" }]}
              >
                <Input.TextArea placeholder="Nội dung" />
              </Form.Item>

              <Form.Item label={null}>
                <Button
                  className="!bg-[#1c5b41] !p-4 hover:!bg-[#fe9614]"
                  type="primary"
                  htmlType="submit"
                >
                  Gửi thông tin
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>

        {/* Khối phải */}
        <div className="flex-1">
          <GoogleMapComponent
            apiKey={process.env.GOOGLE_MAP_API_KEY as string}
          />
        </div>
      </div>
    </>
  );
}
