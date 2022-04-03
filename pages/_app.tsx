import { ApolloProvider, } from '@apollo/client'
import type { AppProps } from 'next/app'
import graphQLClient from '../apollo-client';
import '../styles/globals.scss'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ApolloProvider client={graphQLClient}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default MyApp
