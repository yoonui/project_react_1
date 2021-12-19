import Layout from '../../shared/Layout';
import Data from '../../data/Data.json';
import NContentCard from '../../shared/NContentCard';

function Notice4(){
    return (
        <Layout activeMenu="Notice">
            <NContentCard data={Data["Notice"][3]} key="Notice4"/>
        </Layout>
    );
}

export default Notice4;