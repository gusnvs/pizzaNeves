// O controler vai receber diretamente nossa requisição 
// É com ele que vamos pegar os parâmetros da requisição e vamos chamar o serviço passando os dados necessários

import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        // Vamos descontruir esse objeto
        const { name, email, password } = req.body;

        const createUserService = new CreateUserService();

        // Como o serviço sempre vai retornar alguma coisa, eu preciso pegar essa alguma coisa e alocar em algum lugar, nesse caso uma const
        // Await por que eu quero que ele espere os dados, para então poder retornar pro usuário, pois no Service trata-se de uma função async
        const user = await createUserService.execute({name, email, password});

        return res.json(user);
    }
}

export { CreateUserController }

// Ou seja, quando a pessoa bater na rota '/users', ele vai chamar o Controller
// Com a ativação do Controller, ele vai ficar encarregado de pegar os dados descritos
// Vai inicializar o Serviço, execulta o Serviço (cadastrar, banco de dados...)
// Por fim ele vai devolver na variável, no caso a variável 'user' o retorno que eu quero devolver ao usuário
// Ai então o Controller retorna esse usuário