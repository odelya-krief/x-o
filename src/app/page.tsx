// prettier-ignore
'use client';
import BoardComponent from "@/components/board";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <BoardComponent></BoardComponent>
    </div>
  );
}
