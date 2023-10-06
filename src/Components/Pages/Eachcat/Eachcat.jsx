
import { Link, NavLink } from 'react-router-dom';

const Eachcat = ({ item }) => {


    return (
        <div>
            <NavLink to={`/news/${item.id}`} className=' font-bold'>{item?.name}</NavLink>
        </div >
    );
};

export default Eachcat;