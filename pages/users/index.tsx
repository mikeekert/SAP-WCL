import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import { getWCLToken } from '../../services/jwt-auth';
import styles from '../../styles/Home.module.scss';

function Users() {
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

const getTokenFromWCL = async () => {
    const resp = await getWCLToken();
    sessionStorage.setItem('wcl', resp.access_token);
}

export default Users
