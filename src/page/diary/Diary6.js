import Layout from '../../shared/Layout';
import Data from '../../data/Data.json';
import DContentCard from '../../shared/DContentCard';

function Diary6(){
    return (
        <Layout activeMenu="Diary">
            <DContentCard data={Data["Diary"][0]} key="Diary6"/>
        </Layout>
    );
}

export default Diary6;