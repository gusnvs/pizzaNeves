import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();
// Com o prismaClient conseguimos acessar os models do nosso banco de dados, acessar usuários, criar usuários, deletar...
// E exportamos para que eu utilize ele nos outros arquivos

export default prismaClient;