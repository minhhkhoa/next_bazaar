import React from 'react'
import NewsCategories from './NewsCategories';
import FeaturedNews from './FeaturedNews';
import { Row } from 'antd';
import useWindowSize from '@/hook/WindowSize/useWindowSize';

export default function LeftNews() {
    const { width } = useWindowSize();
  
  return (
    <>
      <Row
        className={`flex-1 gap-5 !flex-col  ${
          (width ?? 0) <= 768 && "!hidden"
        }`}
      >
        <div className={`${(width ?? 0) <= 1024 && "hidden"}`}>
          <NewsCategories />
        </div>

        <div>
          <FeaturedNews />
        </div>
      </Row>
    </>
  );
}
