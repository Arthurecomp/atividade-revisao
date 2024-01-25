"use client";
import { useEffect, useState } from "react";

import { FormularioPage1 } from "./components/FormularioBuscaporId";
import { PropsMovies } from "./interfaces/IMovies";
import { api, getFilme } from "./services/api";

export default function Home() {
  return (
    <main className=" w-screen h-screen bg-slate-800 flex justify-center ">
      <div className=" w-2/3 border-2 items-center flex flex-col border-red-900">
        <h1 className="underline text-xl text-white mt-12 mb-3">
          PESQUISE O SEU FILME
        </h1>
        <div className=" w-full">
          <FormularioPage1 />
        </div>
      </div>
    </main>
  );
}
