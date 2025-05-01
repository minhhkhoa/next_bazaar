import { NewsType } from "@/dataType/new";
import {
  ArrowRightOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { setNewsId } from "@/redux/features/newsSlice";

export default function RightNews({
  News,
}: {
  isNewsDetail?: boolean;
  News: NewsType[];
}) {
  const router = useRouter();
  const dispatch = useDispatch();


  return (
    <>
      <Row className="flex-3 !flex-col gap-5">
        <h1 className="text-2xl font-bold">Tin tức</h1>

        <Row gutter={[16, 16]}>
          {News?.map((item: NewsType) => {
            const { content } = item;
            return (
              <Col
                onClick={() => {
                  router.push(`/tin-tuc/${item.id}`);
                  const id = item.id as string;
                  dispatch(setNewsId(id));
                }}
                key={item.id}
                xs={24}
                md={12}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex flex-col bg-white p-4 shadow rounded gap-2 cursor-pointer"
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={item.url}
                      alt={item.title}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className=" w-full h-auto object-contain rounded-2xl"
                      priority
                    />
                  </div>
                  <div className="font-bold text-2xl">{item.title}</div>

                  <div className="flex gap-3 italic font-medium">
                    <div>
                      <UserOutlined className="px-2" />
                      {item.author}
                    </div>
                    <>|</>
                    <div>
                      <ClockCircleOutlined className="px-2" />
                      {item.date_publish}
                    </div>
                  </div>

                  <div className="line-clamp-2">{content[0].description}</div>

                  <Link href={`/tin-tuc/${item.id}`}>
                    Xem chi tiết{" "}
                    <ArrowRightOutlined style={{ color: "#fe9614" }} />
                  </Link>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Row>
    </>
  );
}
