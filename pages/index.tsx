import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss'

export default function Index() {
    return (
        <div className={styles.main}>
            test
        </div>
    )
}

Index.getLayout = function getLayout(page: any) {
    return (
        <Layout>
            <Header/>
            {page}
            <Footer/>
        </Layout>
    )
}
