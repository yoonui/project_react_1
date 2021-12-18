import Layout from '../../shared/Layout';
import Data from '../../data/Data.json';
import DContentCard from '../../shared/DContentCard';

function Diary4(){
    return (
        <Layout>
            <DContentCard data={Data["Diary"][3]} key="Diary4"/>
        </Layout>
    );
}

export default Diary4;