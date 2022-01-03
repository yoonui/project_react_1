import styles from './GuestCard.module.css';

function GuestCard({ data }){
    return(
        <div className={styles.box}>
            <div className={styles.smallBox1}>
                <div className={styles.no}>No.{data.no}</div>
                <div className={styles.date}>{data.date}</div>
            </div>
            <div className={styles.smallBox2}>
                <img src={data.photo} alt="프사" className={styles.img}/>
                <div>
                    <div className={styles.nickname}>[ {data.nickname} ]</div>
                    <div className={styles.content}>{data.content}</div>
                </div>
            </div>
        </div>
    );
}

export default GuestCard;