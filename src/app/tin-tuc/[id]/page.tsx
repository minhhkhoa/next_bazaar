import PageNewsDetail from "@/page/News/NewsDetail";
import React from "react";

//- khi truy cập vào đúng đường dẫn động [id] ví dụ: localhost:3000/tin-tuc/1
//- khi đó NextJs sẽ tự động bắt được id = 1 và Truyền object { params: { id: "1" } } vào function component này.
//- ngoài tham số params thì còn searchParams  trong URL.


//- với nextJs 15.
//- Hành vi params va searchParams là Promise chỉ xuất hiện từ Next.js 15 (App Router) trở lên. Các phiên bản Next 13 hoặc 14 dùng App Router cũ thì params va searchParams là object thông thường và không cần await.
export default async function NewsDetail({params}: {params: {id: string}}) {
  // console.log(">>>>>params: ", params); //-Promise
  const { id } = await params;
  return (
    <>
      <PageNewsDetail id={id} />
    </>
  );
}
