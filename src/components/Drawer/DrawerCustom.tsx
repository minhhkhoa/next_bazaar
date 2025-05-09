import React, { useState } from "react";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Button, Drawer, Radio, Slider, Space } from "antd";
import { CloseOutlined, FilterOutlined } from "@ant-design/icons";

interface DrawerCustomProps {
  handleSortChange: (e: RadioChangeEvent) => void;
  filter: { sort: string; price: number[] };
  handlePriceChange: (value: number[]) => void;
}

const DrawerCustom: React.FC<DrawerCustomProps> = ({
  handleSortChange,
  filter,
  handlePriceChange,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) => {
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Button
          type="primary"
          className="!bg-[#fe9614] !text-white"
          onClick={showDrawer}
        >
          <FilterOutlined />
          Bộ lọc
        </Button>
      </Space>
      <Drawer
        title="Bộ lọc"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className="filterProduct flex-1 gap-5 rounded-2xl bg-[#ffffff] p-5 h-[300px]">
          <div>
            <p>Sắp xếp</p>
            <Radio.Group
              onChange={handleSortChange}
              value={filter.sort}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Radio value="all">Tất cả</Radio>
              <Radio value="feature">Nổi bật</Radio>
              <Radio value="price-low-high">Giá (Thấp - Cao)</Radio>
              <Radio value="price-high-low">Giá (Cao - Thấp)</Radio>
            </Radio.Group>
          </div>
          <div className="mt-5">
            <p>Khoảng giá</p>
            <div>
              <Slider
                onChange={(value) => handlePriceChange(value)}
                range
                min={0}
                max={10000}
                defaultValue={[0, 10000]}
              />
            </div>
          </div>

          <div onClick={onClose} className="absolute top-3 right-3">
            <CloseOutlined />
          </div>

          <Button onClick={onClose} className="!absolute !top-80 !right-3" type="primary">
            Lọc
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerCustom;
