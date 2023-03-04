import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors'; // essa biblioteca foi importada no intuito de tratar erros
import cors from 'cors';
import { router } from "./routes";

const app = express(); // Estamos colocando tudo o que o express tem a oferecer dentro do app

app.use(express.json()); // Estou falando para o express que o tipo de formato que vamos usar é o json

app.use(cors()); // Estamos habilitando para que qualquer URL,IP conseguir fazer essa requisição na nossa API, não queremos bloqieo dela

app.use(router); // Estou falando que as rotas que minha aplicação vão ter, está dentro do router

app.use((err: Error, req: Request, res: Response, next: NextFunction) => { // vamos tratar dois tipos de erro que possa acontecer
    if (err instanceof Error) {
        // Se for uma instância do tipo Error vamos lançar uma excessão 
        return res.status(400).json({
            error: err.message
        });
    }
    // Se for outro tipo de Error
    return res.status(500).json({status: 'error', message: 'Internal Server Error'});

}); // vamos criar a barreira através de um midway, conforme a biblioteca pede

app.listen(3333, () => console.log('Servidor Online!')); // vamos inicializar o projeto na porta que eu quero, com um callback de informação