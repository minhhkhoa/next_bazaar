import { Radio, Slider } from 'antd';
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Filter({ handleSortChange, filter, handlePriceChange }: any) {
  return (
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
    </div>
  );
}
