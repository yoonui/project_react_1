import Layout from '../shared/Layout';
import styles from './Home.module.css';

function Profile(){
    return (
        <Layout>
            <div className={styles.text}>
                <div>프로필</div>
            </div>
        </Layout>
    );
}

export default Profile;