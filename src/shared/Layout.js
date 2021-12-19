import Menu from "./Menu";
import styles from './Layout.module.css';

function Layout({ children, activeMenu }){
    return (
        <div>
            <Menu activeMenu={activeMenu}/>
            <div className={styles.layout}>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );

}

export default Layout;