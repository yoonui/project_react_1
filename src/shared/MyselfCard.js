import styles from './MyselfCard.module.css';
import test from '../data/test.png';

function MyselfCard({ data }){
    return(
        <div className={styles.box}>
            <img src={test} alt="프사"/>
            <div className={styles.smallBox}>
                <div className={styles.date}>{data.date}</div>
                <div className={styles.content}>{data.content}</div>
            </div>
        </div>
    );
}

export default MyselfCard;