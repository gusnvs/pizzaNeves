import { Request, Response } from "express";
import { DetailsUserService } from "../../services/user/DetailsUserService";

class DetailsUserController {
    async handle(req: Request, res: Response){

        // Como eu criei uma variável para o req, agora posso usar ela, criado na autenticação para buscar o id do usuáro
        const user_id = req.user_id;

        const detailsUserService = new DetailsUserService();

        const userDetails = await detailsUserService.execute(user_id);

        return res.json(userDetails);

    }
}

export { DetailsUserController }