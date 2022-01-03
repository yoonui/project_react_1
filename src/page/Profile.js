import Layout from '../shared/Layout';
import styles from './Profile.module.css';
import wholeBody from '../data/wholeBody.png';

function Profile(){
    return (
        <Layout activeMenu="Profile">
            <div className={styles.box}>
                <div className={styles.oneText}>"토마토는 거꾸로도 토마토!"</div>
                <img className={styles.img} src={wholeBody} alt="캐릭터 외관" />
                <div className={styles.content}>
                    <div className={styles.text}>이름 : 김 사막</div>
                    <div className={styles.text}>성별 : 남성</div>
                    <div className={styles.text}>나이 : 23살</div>
                    <div className={styles.text}>키/몸무게 : 176cm/보통</div>
                    <div className={styles.text}>성격 : 사랑스러움</div>
                    <div className={styles.text}>특징 : 토마토를 싫어한다</div>
                </div>
            </div>
        </Layout>
    );
}

export default Profile;