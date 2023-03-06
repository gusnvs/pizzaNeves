import { Request, Response } from "express";
import { DetailsUserService } from "../../services/user/DetailsUserService";

class DetailsUserController {
    async handle(req: Request, res: Response){

        const user_id = req.user_id;

        const detailsUserService = new DetailsUserService();

        const userDetails = await detailsUserService.execute();

        return res.json(userDetails);

    }
}

export { DetailsUserController }