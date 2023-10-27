import Head from 'next/head'
import Image from 'next/image'
import { Inter } from "next/font/google"
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Titanium Knights</title>
                <meta name="description" content="The Titanium Knights is the organization of the Bergen County Academies' two First Tech Challenge robotics teams, the Knightmares (15891) and the All-Knighters (15887)." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
        
            </main>
        </>
    )
}
