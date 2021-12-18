import Layout from '../shared/Layout';
import Data from '../data/Data.json';
import TitleCard from '../shared/TitleCard';
import styles from './Board.module.css';

function Diary(){
    return (
        <Layout>
            <div className={styles.boardName}>♥ 일기장 ♥</div>
            {Data["Diary"].map(function (data, index){
                return <TitleCard data={data} key={`Diary-${index}`}/>
            })}
        </Layout>
    );
}

export default Diary;