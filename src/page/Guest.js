import Layout from '../shared/Layout';
import Data from '../data/Data.json';
import GuestCard from '../shared/GuestCard';

function Guest(){
    return (
        <Layout activeMenu="Guest">
            {Data["Guest"].map(function (data, index){
                return <GuestCard data={data} key={`Guest-${index}`}/>
            })}
        </Layout>
    );
}

export default Guest;