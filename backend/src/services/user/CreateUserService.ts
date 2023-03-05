// Como o controller teve apenas o trabalho de receber os dados, no serviço é onde iremos trabalhar com esses dados
// Aqui vamos poder realizar validações, atividades e trabalhar de fato com os dados que recebemos do controller

interface UserRequest {
    name: String;
    email: String;
    password: String;
}


class CreateUserService {
    async execute({name, email, password}: UserRequest) {
        console.log(name);
        return { name: name }
    }
}

export { CreateUserService };