import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

// -- ROTAS USER --
router.post('/users', new CreateUserController().handle)


// agora podemos criar uma rota da minha API
// router.get('/teste', (req: Request, res: Response) => {
//     //throw new Error('Erro ao fazer essa requisição!');
//     return res.json({ nome: 'Pizza Neves' });
// });

export { router };