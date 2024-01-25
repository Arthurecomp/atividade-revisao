"use client";
import { use, useEffect, useState } from "react";
import { Card } from "../components/Card/Index";
import { PropsMovies } from "../interfaces/IMovies";
import { api, deleteFilmes } from "../services/api";

export default function Home() {
  const [movies, setMovies] = useState<PropsMovies[]>([]);

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

  async function deleteMovie(id: number) {
    try {
      await deleteFilmes(id);
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error("Erro ao deletar filme:", error);
    }
  }

  return (
    <main className=" flex flex-row w-full h-full bg-slate-800 flex-wrap">
      {movies.map((item: PropsMovies) => {
        return (
          <Card
            deletar={() => {
              deleteMovie(item.id);
            }}
            title={item.title}
            ano={item.ano}
            image="images/frozen.jpg"
          >
            {" "}
            DELETAR{" "}
          </Card>
        );
      })}
    </main>
  );
}
