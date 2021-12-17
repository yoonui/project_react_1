import styles from './ContentCard.module.css';

function ContentCard({ data }){
    return(
        <div className={styles.box}>
                <table className={styles.table}>
                    <tr>
                        <td className={styles.text}>{data.title}</td>
                    </tr>
                    <tr>
                        <td className={styles.date}>{data.date}</td>
                    </tr>
                    <tr>
                        <td className={styles.content}>{data.content}</td>
                    </tr>
                </table>
            </div>
    );
}

export default ContentCard;