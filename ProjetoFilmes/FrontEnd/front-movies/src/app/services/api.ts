import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 1000,
});

async function getFilmes() {
  const response = await api.get("/movies");
  return response.data;
}

async function getFilme(id: number) {
  const response = await api.get(`/movies/${id}`);
  return response.data;
}

async function deleteFilmes(id: number) {
  await api.delete(`/movies/${id}`);
}

async function editeFilmes(id: number, titulo: string, ano: number) {
  const request = await api.put(`/movies/${id}`, {
    title: titulo,
    ano: ano,
  });
}

export { getFilmes, deleteFilmes, getFilme, editeFilmes };
