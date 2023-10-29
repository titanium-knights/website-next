import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'

export default function Home() {
    return (
        <>
            <Head>
                <title>Titanium Knights</title>
                <meta name="description" content="The Titanium Knights is the organization of the Bergen County Academies' two First Tech Challenge robotics teams, the Knightmares (15891) and the All-Knighters (15887)." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.page}>
                <Navbar />
                <section className={styles.topheader}>
                    <h1>The Titanium Knights</h1>
                    <h3>First Tech Challenge teams 15887 and 15891</h3>
                    <Image id="header-logo" src='/knight-in-space.png' alt='Titanium Knights logo' width={400} height={300} />
                </section>
            </main>
        </>
    )
}
