import Layout from '../../shared/Layout';
import Data from '../../data/Data.json';
import ContentCard from '../../shared/ContentCard';

function Notice2(){
    return (
        <Layout>
            <ContentCard data={Data["Notice"][1]} key="Notice1"/>
        </Layout>
    );
}

export default Notice2;