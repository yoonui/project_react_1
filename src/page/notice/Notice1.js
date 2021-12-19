import Layout from '../../shared/Layout';
import Data from '../../data/Data.json';
import NContentCard from '../../shared/NContentCard';

function Notice1(){
    return (
        <Layout activeMenu="Notice">
            <NContentCard data={Data["Notice"][0]} key="Notice1"/>
        </Layout>
    );
}

export default Notice1;