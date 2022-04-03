import Header from '../components/Header';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.scss'

function Home() {
    return (
        <div className={styles.container}>
            <Layout>
                <Header>
                    Header Here
                </Header>
                <Navbar>
                    Navbar here
                </Navbar>
            </Layout>
        </div>
    )
}

export default Home
