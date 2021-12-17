import Layout from '../shared/Layout';
import Data from '../data/Data.json';
import TitleCard from '../shared/TitleCard';

function Diary(){
    return (
        <Layout>
            {Data["Diary"].map(function (data, index){
                return <TitleCard data={data} key={`Notice-${index}`}/>
            })}
        </Layout>
    );
}

export default Diary;