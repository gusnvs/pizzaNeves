import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/home.module.scss'
import logoImg from '../../../public/pizzaneves_escrita_logo.png'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function SingUp() {
    return (
        <>
            <Head>
                <title>PizzaNeves | Cadastre-se</title>
            </Head>
            <div className={styles.containerCenter}>
                <Image src={logoImg} alt='Logo PizzaNeves' width={400} />
                <div className={styles.login}>

                    <h1>Crie sua conta</h1>

                    <form action="">

                        <Input
                            placeholder='Digite seu nome'
                            type='text'
                        />

                        <Input
                            placeholder='Digite seu e-mail'
                            type='text'
                        />
                        <Input
                            placeholder='Digite sua senha'
                            type='password'
                        />

                        <Button type='submit' loading={false}>
                            Cadastrar
                        </Button>

                    </form>

                    <Link href='/' className={styles.text}>
                        Já possui uma conta? Faça seu login
                    </Link>

                </div>
            </div>
        </>
    )
}
