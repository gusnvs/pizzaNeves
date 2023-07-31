import { useContext, FormEvent } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import logoImg from '../../public/pizzaneves_escrita_logo.png'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { AuthContext } from '@/contexts/AuthContext'
import Link from 'next/link'

export default function Home() {

  const { signIn } = useContext(AuthContext); // usando o contexto, e consumindo o contexto que eu importei

  async function handleLogin(event: FormEvent) {
    // por que FormEvent?
    // todo formulário do tipo onSubmit ele atualiza a página, e eu não quero que isso aconteça, por isso...
    event.preventDefault();

    let data = {
      email: 'teste@teste.com',
      password: '123'
    }

    await signIn(data)
  }


  return (
    <>
      <Head>
        <title>PizzaNeves | Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt='Logo PizzaNeves' width={400} />
        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input
              placeholder='Digite seu e-mail'
              type='text'
            />
            <Input
              placeholder='Digite sua senha'
              type='password'
            />

            <Button type='submit' loading={false}>
              Acessar
            </Button>

          </form>

          <Link href='/signup' className={styles.text}>
            Não possui conta? Cadastre-se
          </Link>

        </div>
      </div>
    </>
  )
}
