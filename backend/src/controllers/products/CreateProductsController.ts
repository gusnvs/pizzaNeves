import { Request, Response } from "express";
import { CreateProductsService } from "../../services/products/CreateProductsService";

class CreateProductsController {

    async handle(req: Request, res: Response) {

        const { name, price, description, category_id } = req.body;

        const createProductsService = new CreateProductsService();

        if (!req.file) {
            throw new Error("Erro de upload de imagem!")
        } else {
            const { filename: banner } = req.file;
            const createProduct = await createProductsService.execute({ name, price, description, category_id, banner });
            return res.json(createProduct);
        }

    }

}

export { CreateProductsController }