import Layout from '../shared/Layout';
import test from '../data/test.png';
import styles from './Home.module.css';

function Home(){
    return (
        <Layout activeMenu="Home">
            <div className={styles.text}>
                <img src={test} alt="test"/>
                <div>안녕하수깡</div>
            </div>
        </Layout>
    );
}

export default Home;