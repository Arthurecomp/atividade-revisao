"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { CampoTexto } from "../CampoTexto";
import { Button } from "../Button";
import { api } from "@/app/services/api";

export function Formulario() {
  const [valor, setValor] = useState("");
  const [anoL, setAno] = useState("");

  function aoAlterado(e: ChangeEvent<HTMLInputElement>) {
    setValor(e.target.value);
    console.log(valor);
  }

  function aoAlterado2(e: ChangeEvent<HTMLInputElement>) {
    setAno(e.target.value);
    console.log(anoL);
  }

  async function addLivros(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const request = await api.post("/movies", {
      title: valor,
      ano: parseInt(anoL),
    });
    alert(`livro ${valor} adicionado com sucesso `);
    setAno(""), setValor("");
  }

  return (
    <div className=" flex flex-col">
      <form className=" flex flex-col border-2 " onSubmit={addLivros}>
        <div className=" mb-2 flex ">
          <CampoTexto
            texto={"Digite o FILME que quer adicionar: "}
            aoAlterado={aoAlterado}
            valor={valor}
          />
          <CampoTexto texto="ANO" aoAlterado={aoAlterado2} valor={anoL} />
        </div>
        <div className="flex justify-around">
          <Button type={"submit"} children={"ADICIONAR FILME"} />
        </div>
      </form>
    </div>
  );
}
