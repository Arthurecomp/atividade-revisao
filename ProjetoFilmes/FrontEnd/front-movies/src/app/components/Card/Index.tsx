"use client";

import { Children, ReactNode } from "react";

interface PropsCard {
  title: string;
  ano: number;
  image?: string;
  deletar?: () => void;
  children: ReactNode;
}
export function Card({ title, ano, image, deletar, children }: PropsCard) {
  return (
    <div className="flex flex-col justify-center items-center w-60 h-72 m-2 border-2 bg-slate-300">
      <div className=" flex flex-row gap-3 w-full bg-slate-400">
        <p>{title} - </p>
        <p>{ano}</p>
      </div>
      <img src={"images/frozen.jpg"} className=" w-full h-60" />
      <button
        onClick={deletar}
        className=" justify-center flex w-36 rounded-md hover:bg-red-500 bg-slate-400 mt-1"
      >
        {children}
      </button>
    </div>
  );
}
