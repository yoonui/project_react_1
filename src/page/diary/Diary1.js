import Layout from '../../shared/Layout';
import Data from '../../data/Data.json';
import DContentCard from '../../shared/DContentCard';

function Diary1(){
    return (
        <Layout activeMenu="Diary">
            <DContentCard data={Data["Diary"][5]} key="Diary1"/>
        </Layout>
    );
}

export default Diary1;