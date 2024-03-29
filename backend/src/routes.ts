import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductsController } from "./controllers/products/CreateProductsController";
import { ListByCategoryController } from "./controllers/products/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailsOrderController } from "./controllers/order/DetailsOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";
import { Request, Response } from "express";
import uploadConfig from "./config/multer"

const router = Router();
const upload = multer(uploadConfig.upload('./tmp'));


// --------------------------------------------------------------------- 1 Teste da API
// agora podemos criar uma rota da minha API
router.get('/teste', (req: Request, res: Response) => {
    //throw new Error('Erro ao fazer essa requisição!');
    return res.json({ nome: 'Pizza Neves' });
});

router.get('/produtinho', (req: Request, res: Response) => {
    return res.json({ okok: 'esta chegannnndo' });
});
// --------------------------------------------------------------------- Fim do 1 Tesde da API


// -- ROTAS USER --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/userInfo', isAuthenticated, new DetailsUserController().handle)

// -- ROTAS CATEGORY --
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

// -- ROTAS PRODUTS --
router.post('/products', isAuthenticated, upload.single('file'), new CreateProductsController().handle)
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle )

// -- ROTAS ORDER --
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)
router.get('/orders', isAuthenticated, new ListOrderController().handle)

// -- ROTAS ADD ITEM -> ORDER
router.post('/order/add', isAuthenticated, new AddItemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)
router.get('/order/details', isAuthenticated, new DetailsOrderController().handle)

// -- ROUTAS SEND/FINISH ORDER
router.put('/order/send', isAuthenticated, new SendOrderController().handle)
router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)




export { router };