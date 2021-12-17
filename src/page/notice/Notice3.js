import Layout from '../../shared/Layout';
import Data from '../../data/Data.json';
import ContentCard from '../../shared/ContentCard';

function Notice3(){
    return (
        <Layout>
            <ContentCard data={Data["Notice"][2]} key="Notice1"/>
        </Layout>
    );
}

export default Notice3;