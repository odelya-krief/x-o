// prettier-ignore
'use client';
import BoardComponent from "@/components/board";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="text-gray-900 font-bold text-xl mb-2">Page</p>
      <BoardComponent></BoardComponent>
    </div>
  );
}
