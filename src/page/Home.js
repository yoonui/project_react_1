import Layout from '../shared/Layout';
import homeImg from '../data/home.jpg';
import styles from './Home.module.css';

function Home(){
    return (
        <Layout activeMenu="Home">
            <div className={styles.box}>
                <img className={styles.img} src={homeImg} alt="홈_셀카"/>
                <div className={styles.text}>안녕하수깡</div>
            </div>
        </Layout>
    );
}

export default Home;