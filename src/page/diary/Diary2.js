import Layout from '../../shared/Layout';
import Data from '../../data/Data.json';
import DContentCard from '../../shared/DContentCard';

function Diary2(){
    return (
        <Layout activeMenu="Diary">
            <DContentCard data={Data["Diary"][1]} key="Diary2"/>
        </Layout>
    );
}

export default Diary2;