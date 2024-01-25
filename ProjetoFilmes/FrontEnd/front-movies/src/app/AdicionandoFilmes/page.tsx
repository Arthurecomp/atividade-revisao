"use client";

import { Formulario } from "../components/FormularioAddFilmes";

export default function Home() {
  return (
    <main className=" flex justify-center w-screen h-screen bg-slate-800">
      <div className=" flex items-start mt-2">
        <Formulario />
      </div>
    </main>
  );
}
