import Layout from '../../shared/Layout';
import Data from '../../data/Data.json';
import NContentCard from '../../shared/NContentCard';

function Notice3(){
    return (
        <Layout>
            <NContentCard data={Data["Notice"][2]} key="Notice3"/>
        </Layout>
    );
}

export default Notice3;