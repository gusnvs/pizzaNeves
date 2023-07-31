import axios, { AxiosError } from "axios"
import { parseCookies } from "nookies"
import { AuthTokenError } from "./errors/AuthTokenError";
import { signOut } from "../contexts/AuthContext";


export function setUpAPIClient(ctx = undefined) {
    let cookies = parseCookies(ctx);
    const api = axios.create({
        baseURL: 'http://localhost:3333',
        headers: {
            Authorization: `Bearer ${cookies['@pizzaneves.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response
    }, (error: AxiosError) => {
        if(error.response.status === 401){
            // qualquer erro 401 (não autorizado) devemos deslogar o usuário
            if(typeof window !== undefined){
                // chamar a função para deslogar o usuário
                signOut();
            } else {
                return Promise.reject(new AuthTokenError());
            }
        }

        return Promise.reject(error)
    })

    return api
}

// Em resumo, esse código serve para configurar um cliente de API com axios, 
// onde ele adiciona automaticamente o token de autorização (JWT) aos cabeçalhos 
// (headers) de todas as requisições feitas pelo cliente. Além disso, ele intercepta 
// as respostas da API para verificar se ocorreu algum erro de autorização (401) e 
// tomar ações adequadas para lidar com esse erro, seja deslogando o usuário (caso seja possível)
//  ou retornando um erro específico caso o código esteja sendo executado no servidor.