import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { CampoTexto } from "../CampoTexto";
import { api, deleteFilmes, getFilme } from "@/app/services/api";
import { PropsMovies } from "@/app/interfaces/IMovies";
import { Card } from "../Card/Index";

export function FormularioPage1() {
  const [valor, setValor] = useState("");
  const [movies, setMovies] = useState<PropsMovies[]>([]);
  const [filme, setFilme] = useState<PropsMovies | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/movies");
        setMovies(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };
    fetchData();
  }, []);

  async function aoAlterado(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    setValor(inputValue);

    if (inputValue === "") {
      setFilme(null);
      return;
    }

    const filmesFiltrados = movies.filter((filme) =>
      filme.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    if (filmesFiltrados.length > 0) {
      const filmeEncontrado = filmesFiltrados[0];
      setFilme(filmeEncontrado);
    } else {
      setFilme(null);
    }
  }

  return (
    <div className="flex w-full justify-around items-center flex-col">
      <div className="mb-2 flex w-full">
        <CampoTexto texto={"FILME: "} aoAlterado={aoAlterado} valor={valor} />
      </div>
      {filme ? (
        <div>
          <Card title={filme.title} ano={filme.ano} children={undefined} />
        </div>
      ) : null}
    </div>
  );
}
