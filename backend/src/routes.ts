import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductsController } from "./controllers/products/CreateProductsController";
import { Request, Response } from "express";
import uploadConfig from "./config/multer"

const router = Router();
const upload = multer(uploadConfig.upload('./tmp'));

// -- ROTAS USER --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/userInfo', isAuthenticated, new DetailsUserController().handle)

// --------------------------------------------------------------------- 1 Teste da API
// agora podemos criar uma rota da minha API
router.get('/teste', (req: Request, res: Response) => {
    //throw new Error('Erro ao fazer essa requisição!');
    return res.json({ nome: 'Pizza Neves' });
});
// --------------------------------------------------------------------- Fim do 1 Tesde da API

// -- ROTAS CATEGORY --
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

// -- ROTAS PRODUTS --
router.post('/products', isAuthenticated, upload.single('file'), new CreateProductsController().handle)

export { router };