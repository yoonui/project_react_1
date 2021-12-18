import { Link } from 'react-router-dom';
import styles from './TitleCard.module.css';

function TextCard({ data }){
    return(
        <div className={styles.box}>
                <table className={styles.table}>
                    <tr>
                        <td className={styles.text}><Link to={`/board/${data.id}`} className={styles.link}>{data.title}</Link></td>
                        <td className={styles.text}>{data.date}</td>
                    </tr>
                </table>
            </div>
    );
}

export default TextCard;