import Layout from '../shared/Layout';
import Data from '../data/Data.json';
import TitleCard from '../shared/TitleCard';
import styles from './Board.module.css';

function Notice(){
    return (
        <Layout activeMenu="Notice">
        <div className={styles.boardName}>♥ 공지사항 ♥</div>
            {Data["Notice"].map(function (data, index){
                return <TitleCard data={data} key={`Notice-${index}`}/>
            })}
        </Layout>
    );
}

export default Notice;