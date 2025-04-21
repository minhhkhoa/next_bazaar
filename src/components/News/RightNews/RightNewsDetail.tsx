import { NewsType } from "@/dataType/new";
import React from "react";

export default function RightNewsDetail({ News }: { News: NewsType[] }) {
  console.log('>>>check news: ', News);
  return <div>RightNewsDetail</div>;
}
