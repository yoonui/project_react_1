import Layout from '../shared/Layout';
import styles from './Profile.module.css';
import test2 from '../data/test2.png';

function Profile(){
    return (
        <Layout>
            <div className={styles.box}>
                <div className={styles.oneText}>"울랄라"</div>
                <img src={test2} alt="캐릭터 외관" />
                <div className={styles.content}>
                    <div className={styles.text}>이름 : 코딩맘</div>
                    <div className={styles.text}>성별 : 알아서머하게</div>
                    <div className={styles.text}>나이 : 꽃다운17세</div>
                    <div className={styles.text}>키/몸무게 : 크다/사랑스럽다</div>
                    <div className={styles.text}>성격 : 깜찍함</div>
                    <div className={styles.text}>특징 : 내성발톱</div>
                </div>
            </div>
        </Layout>
    );
}

export default Profile;