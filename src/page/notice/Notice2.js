import Layout from '../../shared/Layout';
import Data from '../../data/Data.json';
import NContentCard from '../../shared/NContentCard';

function Notice2(){
    return (
        <Layout>
            <NContentCard data={Data["Notice"][1]} key="Notice2"/>
        </Layout>
    );
}

export default Notice2;