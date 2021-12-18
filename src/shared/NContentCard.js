import styles from './NContentCard.module.css';

function NContentCard({ data }){
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

export default NContentCard;