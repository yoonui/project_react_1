import Layout from '../shared/Layout';
import styles from './Home.module.css';

function Diary(){
    return (
        <Layout>
            <div className={styles.text}>
                <div>일기장</div>
            </div>
        </Layout>
    );
}

export default Diary;