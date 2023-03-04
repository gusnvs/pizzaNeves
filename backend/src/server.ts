import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";

const app = express(); // Estamos colocando tudo o que o express tem a oferecer dentro do app
app.use(express.json()); // Estou falando para o express que o tipo de formato que vamos usar é o json
app.use(router); // Estou falando que as rotas que minha aplicação vão ter, está dentro do router
app.listen(3333, () => console.log('Servidor Online!')); // vamos inicializar o projeto na porta que eu quero, com um callback de informação