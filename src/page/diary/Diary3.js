import Layout from '../../shared/Layout';
import Data from '../../data/Data.json';
import DContentCard from '../../shared/DContentCard';

function Diary3(){
    return (
        <Layout activeMenu="Diary">
            <DContentCard data={Data["Diary"][2]} key="Diary3"/>
        </Layout>
    );
}

export default Diary3;