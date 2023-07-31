import { createContext, ReactNode, useState } from "react";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import Router from "next/router";
import { api } from "../services/apiClient";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
}

type SignInProps = {
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

// Para trabalhar de uma forma global na aplicação, temos esse context API
export const AuthContext = createContext({} as AuthContextData)


// deslogar o usuário
export function signOut() {
    try {
        destroyCookie(undefined, '@pizzaneves.token')
        Router.push('/')
    } catch {
        console.log('Signout error!')
    }
}

// o provider é quem vai prover as informações, que aonde vamos ter os métodos de login, cadastro, ...
export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    async function signIn({ email, password }: SignInProps) {
        try {
            const response = await api.post("/session", {
                email,
                password
            })

            // com a requisição precisamos salvar no cookie o token, e adicionar os dados do usuário no user
            const { id, name, token } = response.data;
            setCookie(undefined, '@pizzaneves.token', id, {
                maxAge: 60 * 60 * 23 * 30, // expirar em 1 mês
                path: "/" // quais caminhos terão acesso ao cookie, ou seja, todos
            })

            setUser({ id, name, email })

            // passar para todas as próximas requisições o nosso token
            api.defaults.headers['Authorization'] = `Bearer ${token}`

            // por fim, depois de logar, passar pela verificação, adicionar o cookie, useState do user, colocar o token das requisições, vamos enviar para /dashboard
            Router.push('/dashboard')


            // console.log(response.data)
        } catch(err) {
            console.log("erro ao acessar", err)
        }
    }


    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn , signOut}}>
            {children}
        </AuthContext.Provider>
    )
}