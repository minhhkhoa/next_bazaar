import React from "react";
import { notification, Space } from "antd";
import Loader from "../Uiverse/Loader";

const Notifycation: React.FC<{ label: string }> = ({ label }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (pauseOnHover: boolean) => () => {
    api.open({
      message: <p className="text-center text-green-400">Mình chưa có làm phần này!</p>,
      description: <Loader />,
      showProgress: true,
      pauseOnHover,
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <p onClick={openNotification(true)}>{label}</p>
      </Space>
    </>
  );
};

export default Notifycation;
