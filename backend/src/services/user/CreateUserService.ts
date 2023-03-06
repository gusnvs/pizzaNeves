// Como o controller teve apenas o trabalho de receber os dados, no serviço é onde iremos trabalhar com esses dados
// Aqui vamos poder realizar validações, atividades e trabalhar de fato com os dados que recebemos do controller

import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

export interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({name, email, password}: UserRequest ) {

        // Vamos fazer as verificações
        
        if(!email) {
            throw new Error("E-mail incorreto!")
        }

        const userAlreadyExist = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(userAlreadyExist){
            throw new Error("Este e-mail já existe!")
        }

        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: {
               id: true,
               name: true,
               email: true 
            }
        })

        return user;
    }
}

export { CreateUserService };