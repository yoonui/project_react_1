import Layout from '../shared/Layout';
import Data from '../data/Data.json';
import TitleCard from '../shared/TitleCard';

function Notice(){
    return (
        <Layout>
            {Data["Notice"].map(function (data, index){
                return <TitleCard data={data} key={`Notice-${index}`}/>
            })}
        </Layout>
    );
}

export default Notice;