// Vamos criar a etapa de login no sistema

import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {

    async execute({ email, password }: AuthRequest) {

        // Vamos verificar esse usuário

        if (!email || !password) {
            throw new Error("Este campo é obrigatório!");
        }

        const authAlreadyExist = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!authAlreadyExist) {
            throw new Error("E-mail ou senha está incorreto!");
        }

        const passwordCompareExist = await compare(password, authAlreadyExist.password);

        if (!passwordCompareExist) {
            throw new Error("E-mail ou senha está incorreto!");
        }

        // Se passou por toda a verificação, vamos gerar um token JWT e devolver os dados do usuário como ID, nome e senha

        const token = sign(
            {
                name: authAlreadyExist.name,
                email: authAlreadyExist.email
            },
            process.env.JWT_SECRET,
            {
                subject: authAlreadyExist.id,
                expiresIn: '10d'
            }
            )
        // A função sign exige um parâmetro senha
        // Vamos gerar um hash, e salvar numa variável de ambiente, pois não é interessante a senha ficar exposta
        // Usamos o dotenv para acessar as variáveis de ambiente



        return {
            id: authAlreadyExist.id,
            name: authAlreadyExist.name,
            email: authAlreadyExist.email,
            token: token
        };
    }
}

export { AuthUserService }