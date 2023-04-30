import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import logoImg from '../../public/pizzaneves_logo.png'
import { Input } from '@/components/ui/Input'

export default function Home() {
  return (
    <>
      <Head>
        <title>PizzaNeves | Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt='Logo PizzaNeves' />
        <div className={styles.login}>
          <form action="">
            <Input
              placeholder='Digite seu e-mail'
              type='text'
            />
            <Input
              placeholder='Digite sua senha'
              type='password'
            />
          </form>
        </div>
      </div>
    </>
  )
}
