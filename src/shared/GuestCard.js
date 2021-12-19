import styles from './GuestCard.module.css';
import test from '../data/test.png';

function GuestCard({ data }){
    return(
        <div className={styles.box}>
            <div className={styles.smallBox1}>
                <div>No.{data.no}</div>
                <div className={styles.date}>{data.date}</div>
            </div>
            <div className={styles.smallBox2}>
                <img src={test} alt="프사" className={styles.img}/>
                <div className={styles.content}>{data.content}</div>
            </div>
        </div>
    );
}

export default GuestCard;