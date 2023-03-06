import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

// -- ROTAS USER --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/userInfo', isAuthenticated, new DetailsUserController().handle)

// --------------------------------------------------------------------- 1 Teste da API
// agora podemos criar uma rota da minha API
// router.get('/teste', (req: Request, res: Response) => {
//     //throw new Error('Erro ao fazer essa requisição!');
//     return res.json({ nome: 'Pizza Neves' });
// });
// --------------------------------------------------------------------- Fim do 1 Tesde da API


export { router };