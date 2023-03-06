// Vamos criar a etapa de login no sistema

import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {

    async execute({ email, password }: AuthRequest) {
       
        // Vamos verificar esse usuário

        if(!email || !password) {
            throw new Error("Este campo é obrigatório!");
        }

        const authAlreadyExist = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(!authAlreadyExist) {
            throw new Error("E-mail ou senha está incorreto!");
        }

        const passwordCompareExist = await compare(password, authAlreadyExist.password);

        if(!passwordCompareExist) {
            throw new Error("E-mail ou senha está incorreto!");
        }

        // Se passou por toda a verificação, vamos gerar um token JWT e devolver os dados do usuário como ID, nome e senha

        return { ok: true };
    }
}

export { AuthUserService }