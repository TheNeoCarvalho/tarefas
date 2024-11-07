import { GetServerSideProps } from 'next'
import styles from './dash.module.css'
import Head from 'next/head'

import { getSession } from 'next-auth/react'
import { TextArea } from '../../components/TextArea'

export default function Dash(){
    return (
        <div className={styles.container}>
        <Head>
            <title>Meu painel - Dash</title>
        </Head>
       <main className={styles.main}>
        <section className={styles.content}>
            <div className={styles.contentForm}>
                <h1 className={styles.title}>
                    Qual sua tarefa?
                </h1>
                <form>
                    <TextArea />
                    <div className={styles.checkBoxArea}>
                        <input 
                            type="checkbox"
                            className={styles.checkbox}
                        />
                        <label>Deixar tarefa publica?</label>
                    </div>
                    <button type="submit" className={styles.button}>Registar</button>
                </form>
            </div>
        </section>
       </main>
        </div>
        
    )
}

export const getServerSideProps: GetServerSideProps = async ( {req} ) => {
    const session = await getSession({ req })

    if(!session?.user) {
        return  {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {
        props: {}
    }
}