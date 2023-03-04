import { Router, Request, Response } from "express";

const router = Router();
// agora podemos criar uma rota da minha API
router.get('/teste', (req: Request, res: Response) => {
    //throw new Error('Erro ao fazer essa requisição!');
    return res.json({ nome: 'Pizza Neves' });
});

export { router };