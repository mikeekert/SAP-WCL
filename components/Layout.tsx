import Head from 'next/head';
import { ReactNode } from 'react';

type Props = {
    children?: ReactNode
}
const Layout = ({children}: Props) => (
    <div>
        <Head>
            <title>App here</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        {children}
    </div>
)

export default Layout
