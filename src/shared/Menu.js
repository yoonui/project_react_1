import { Link } from 'react-router-dom'; 
import styles from './Menu.module.css';

function Menu({ activeMenu }){
    return (
        <div className={styles.menu}>
            <div>
                <Link to="/" className={activeMenu==='Home' ? styles.focused : styles.list}>프롤로그</Link>
            </div>
            <div className={styles.list}>|</div>
            <div>
                <Link to="/notice" className={activeMenu==='Notice' ? styles.focused : styles.list}>공지사항</Link>
            </div>
            <div className={styles.list}>|</div>
            <div>
                <Link to="/profile" className={activeMenu==='Profile' ? styles.focused : styles.list}>프로필</Link>
            </div>
            <div className={styles.list}>|</div>
            <div>
                <Link to="/diary" className={activeMenu==='Diary' ? styles.focused : styles.list}>일기장</Link>
            </div>
            <div className={styles.list}>|</div>
            <div>
                <Link to="/guest" className={activeMenu==='Guest' ? styles.focused : styles.list}>방명록</Link>
            </div>
        </div>
    );
}

export default Menu;