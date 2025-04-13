import Image from "next/image";
import Link from "next/link";
import SearchProduct from "../Search/SearchProduct";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Tooltip } from "antd";

export default function Header() {
  return (
    <>
      <div className="flex justify-evenly items-center gap-3 bg-[#1c5b41] h-22">
        <Link href="/">
          <Image
            alt="Logo"
            src="https://bizweb.dktcdn.net/100/455/315/themes/894917/assets/logo.png?1724746453440"
            width={153}
            height={40}
            priority
            className="w-[153px] h-[40px]"
          />
        </Link>

        <SearchProduct />

        <div className="flex justify-center items-center gap-3">
          <UserOutlined style={{ fontSize: "26px", color: "#fff" }} />
          <div className="text-white">
            <Link href={"/login"} className="hover:text-[#fe9614]">
              Đăng nhập
            </Link>
            <span className="mx-2">/</span>
            <Link href={"/register"} className="hover:text-[#fe9614]">
              Đăng ký
            </Link>
          </div>

          <span className="text-white"> | </span>

          <div>
            <Tooltip title="Gio hang">
              <Badge count={5} size="small">
                <ShoppingCartOutlined
                  style={{ fontSize: "26px", color: "#fff" }}
                />
              </Badge>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}
