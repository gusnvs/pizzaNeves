// Esse contexto é uma ideia para para que os dados possam ser consumidos em qualquer página
// Quero saber se o token dele é válido, se ele está logado ou não, se ele tem permissão às páginas
// Com isso, vamos usar o context API

import { createContext, ReactNode, useState } from "react";

type AuthContextData = {
    user: UserProps;
    isAuthenticate: boolean;
    signIn: (credentials: SignInProps) => Promise<void>; // como vai na API, pode dar certo, pode demorar, pode falhar.. justamente, é uma promessa de que dará certo -> Promise
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

export const AuthContext = createContext({} as AuthContextData) // o createContext vai começar com um objeto vazio, mas que vai seguir uma tipagem

//--------------------------------------------------------------

// vamos fazer agora o provider do contexto, aonde vamos ter os métodos

export function AuthProvider ({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>();
    const isAuthenticate = !!user; // eu estou convertendo se o user estiver vazio ou não em booleano

    async function signIn() {
        alert('Cliclou no botão')
    }

    return ( 

        // O value do AuthContext.Provider é justamente qual o valor que eu quero deixar para qualquer componente ter acesso
        // Ou seja, tudo dentro do value, qualquer componente pode acessar
        <AuthContext.Provider value={{ user, isAuthenticate, signIn }}> 
            {children}
        </AuthContext.Provider>
       // aqui dentro eu quero que apenas rederize os componentes que vão estar dentro dele
        //é como se o contexto estivesse por volta de toda a nossa aplicação, e dentro, no caso aqui, são as páginas
        //para isso eu preciso do children, que basicamente é o que vai ser renderizado, e é do tipo ReactNode
    )
}







