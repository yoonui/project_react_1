import Layout from '../../shared/Layout';
import Data from '../../data/Data.json';
import DContentCard from '../../shared/DContentCard';

function Diary1(){
    return (
        <Layout>
            <DContentCard data={Data["Diary"][0]} key="Diary1"/>
        </Layout>
    );
}

export default Diary1;