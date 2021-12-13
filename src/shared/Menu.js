import styles from './Menu.module.css';

function Menu(){
    return (
        <div className={styles.menu}>
            <div>
                <div className={styles.list}>프롤로그</div>
            </div>
            <div className={styles.list}>|</div>
            <div>
                <div className={styles.list}>공지사항</div>
            </div>
            <div className={styles.list}>|</div>
            <div>
                <div className={styles.list}>일기장</div>
            </div>
            <div className={styles.list}>|</div>
            <div>
                <div className={styles.list}>혼잣말</div>
            </div>
            <div className={styles.list}>|</div>
            <div>
                <div className={styles.list}>방명록</div>
            </div>
        </div>
    );
}

export default Menu;