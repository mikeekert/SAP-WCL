import Head from 'next/head';
import { ReactNode } from 'react';
import styles from './Layout.module.css';

type Props = {
    children?: ReactNode
}
export default function Layout({children}: Props) {
    return (
        <>
            <Head>
                <title>App here</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <main className={styles['main-container']}>{children} </main>
        </>
    )
}
