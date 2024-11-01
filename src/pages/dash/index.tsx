import styles from './dash.module.css'
import Head from 'next/head'

export default function Dash(){
    return (
        <div className={styles.container}>
        <Head>
            <title>Meu painel - Dash</title>
        </Head>
        <h1>Dash</h1>
        </div>
        
    )
}