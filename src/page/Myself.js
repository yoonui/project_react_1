import Layout from '../shared/Layout';
import styles from './Home.module.css';

function Myself(){
    return (
        <Layout>
            <div className={styles.text}>
                <div>혼잣말</div>
            </div>
        </Layout>
    );
}

export default Myself;