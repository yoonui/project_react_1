import styles from './DContentCard.module.css';

function DContentCard({ data }){
    return(
        <div className={styles.box}>
            <div className={styles.title}>{data.title}</div>
            <div className={styles.date}>{data.date}</div>
            <div className={styles.content}>{data.content}</div>
        </div>
    );
}

export default DContentCard;