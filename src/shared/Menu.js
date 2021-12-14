import { Link } from 'react-router-dom'; 
import styles from './Menu.module.css';

function Menu(){
    return (
        <div className={styles.menu}>
            <div>
                <Link to="/" className={styles.list}>프롤로그</Link>
            </div>
            <div className={styles.list}>|</div>
            <div>
                <Link to="/notice" className={styles.list}>공지사항</Link>
            </div>
            <div className={styles.list}>|</div>
            <div>
                <Link to="/profile" className={styles.list}>프로필</Link>
            </div>
            <div className={styles.list}>|</div>
            <div>
                <Link to="/diary" className={styles.list}>일기장</Link>
            </div>
            <div className={styles.list}>|</div>
            <div>
                <Link to="/myself" className={styles.list}>혼잣말</Link>
            </div>
        </div>
    );
}

export default Menu;