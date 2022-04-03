import '../styles/globals.scss'

function MyApp({Component, pageProps}: any) {

    const getLayout = Component.getLayout;
    return getLayout(<Component {...pageProps} />)
}

export default MyApp
