import Layout from '../../shared/Layout';
import Data from '../../data/Data.json';
import DContentCard from '../../shared/DContentCard';

function Diary5(){
    return (
        <Layout>
            <DContentCard data={Data["Diary"][4]} key="Diary5"/>
        </Layout>
    );
}

export default Diary5;