import { Router, Request, Response } from "express";

const router = Router();
// agora podemos criar uma rota da minha API
router.get('/teste', (req: Request, res: Response) => {
    return res.json({ nome: 'Pizza Neves' })
});

export { router };