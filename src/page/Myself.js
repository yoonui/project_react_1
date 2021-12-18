import Layout from '../shared/Layout';
import Data from '../data/Data.json';
import MyselfCard from '../shared/MyselfCard';

function Myself(){
    return (
        <Layout>
            {Data["Myself"].map(function (data, index){
                return <MyselfCard data={data} key={`Myself-${index}`}/>
            })}
        </Layout>
    );
}

export default Myself;