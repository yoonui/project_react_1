import styles from './DContentCard.module.css';

function DContentCard({ data }){
    return(
        <div className={styles.box}>
            <div className={styles.title}>{data.title}</div>
            <div className={styles.date}>{data.date}</div>
            <div><img src={data.photo} alt="다이어리 사진" className={styles.img}/></div>
            <div className={styles.text}>{data.content}</div>
        </div>
    );
}

export default DContentCard;