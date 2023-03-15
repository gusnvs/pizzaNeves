import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
    sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    // Vamos receber o token
    const authToken = req.headers.authorization;

    if(!authToken) {
        return res.status(401).end();
    }

    //console.log(authToken);

    const [, token] = authToken.split(" ") // aqui estou 'descontruindo' o que é gerado guardando somente o token

    //console.log(token)


    try{
        // Vamos validar esse token
        // Vamos descontruir com {} e pegar o sub, que é o id do usuário
        const { sub } = verify(token, process.env.JWT_SECRET) as PayLoad; // Estou afirmando que ele vai me devolver no formato que atribui no PayLoad
        //console.log(sub);

        // Estamos recuperando o id do token e colocando dentro de uma variável user_id dentro do Request, que eu tive que criar
        req.user_id = sub;
        return next();
    }catch(err){
        return res.status(401).end();
    }
}