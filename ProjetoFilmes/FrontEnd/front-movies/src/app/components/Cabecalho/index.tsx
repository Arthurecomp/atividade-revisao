"use client";
import Link from "next/link";

export function Cabecalho() {
  return (
    <section className=" h-16 w-full flex items-center justify-between bg-slate-400">
      <div>
        <img src="images/globo.png" className=" h-16 ml-2" />
      </div>

      <div className="flex justify-end items-center">
        <Link className=" mr-3 border-b-2 hover:border-blue-700" href={"/"}>
          HOME
        </Link>

        <Link
          className=" mr-3 border-b-2  hover:border-blue-700"
          href={"/AdicionandoFilmes"}
        >
          ADICIONAR FILME
        </Link>
        <Link
          className=" mr-3 border-b-2  hover:border-blue-700"
          href={"/TodosFilmes"}
        >
          TODOS OS FILMES
        </Link>
        <Link
          className=" mr-3 border-b-2  hover:border-blue-700"
          href={"/EditarFilmes"}
        >
          EDITAR FILME
        </Link>
      </div>
    </section>
  );
}
