import fastify from "fastify";
import { prisma } from "./lib/prisma";
import fastifyCors from "@fastify/cors";

const server = fastify({ logger: true });
server.register(fastifyCors, {});

interface movieType {
  title: string;
  ano: number;
}

server.get("/movies", async (req, reply) => {
  const result = await prisma.movie.findMany();
  reply.send(result);
});

server.get("/movies/:id", async (req, reply) => {
  const result = await prisma.movie.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  reply.send(result);
});

server.post<{ Body: movieType }>("/movies", async (req, reply) => {
  await prisma.movie.create({
    data: {
      title: req.body.title,
      ano: req.body.ano,
    },
  });
});

server.delete("/movies/:id", async (req, reply) => {
  await prisma.movie.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
});

server.put<{ Body: movieType }>("/movies/:id", async (req, reply) => {
  await prisma.movie.update({
    where: { id: parseInt(req.params.id) },
    data: { title: req.body.title, ano: req.body.ano },
  });
});

server.listen({ port: 3001 }, function (err, address) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
