"use client";
import { useEffect, useState } from "react";
import { Card } from "../components/Card/Index";
import { PropsMovies } from "../interfaces/IMovies";
import { api, editeFilmes } from "../services/api";

export default function Home() {
  const [movies, setMovies] = useState<PropsMovies[]>([]);
  const fetchData = async () => {
    try {
      const response = await api.get("/movies");
      setMovies(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function editMovie(id: number) {
    try {
      const titulo: string | null = window.prompt("Digite o novo título:");
      if (titulo === null) {
        return;
      }
      const anoString: string | null = window.prompt("Digite o novo ano:");
      const ano: number | null = anoString ? parseInt(anoString) : null;

      if (ano === null || isNaN(ano)) {
        return;
      }
      await editeFilmes(id, titulo, ano);

      fetchData();
    } catch (error) {
      console.error("Erro ao editar filme:", error);
    }
  }

  return (
    <main className="flex flex-row w-full h-full bg-slate-800 flex-wrap">
      {movies.map((item: PropsMovies) => (
        <Card
          key={item.id} // Adicionar uma chave única
          deletar={() => {
            editMovie(item.id);
          }}
          title={item.title}
          ano={item.ano}
          image="images/frozen.jpg"
        >
          {" "}
          EDITAR{" "}
        </Card>
      ))}
    </main>
  );
}
