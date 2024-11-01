import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/home.module.css'
import heroImg from '../../public/assets/images/hero.png'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas + | Organize suas tarefas de forma fácil</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image 
            className={styles.hero} 
            src={heroImg} 
            alt="hero" 
            priority 
          />
        </div>
        <h1 className={styles.title}>Sistema feito para você organizar <br/>
          seus estudos e terefas
        </h1>
        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>+12 posts</span>
          </section>
          <section className={styles.box}>
            <span>+12 comentários</span>
          </section>
        </div>
      </main>
      
    </div>
  )
}

export default Home