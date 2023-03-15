import { Request, Response } from "express";
import { CreateProductsService } from "../../services/products/CreateProductsService";

class CreateProductsController {

    async handle(req: Request, res: Response) {

        const { name, price, description, category_id } = req.body;
        let banner = '';

        const createProductsService = new CreateProductsService();

        const createProduct = await createProductsService.execute({name, price, description, category_id, banner} );

        return res.json(createProduct)

    }
    
}

export { CreateProductsController }