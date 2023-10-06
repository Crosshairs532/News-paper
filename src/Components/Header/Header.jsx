import head_img from '../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div>
            <div className='text-center' >
                <div className=' w-[470px] h-[60px] mx-auto'>
                    <img className=' w-full' src={head_img} alt="" />
                </div>
                <p><small>Journalism Without Fear or Favour</small></p>
                <h1>{moment().format('MMMM Do YYYY')}</h1>
            </div>
        </div>
    );
};

export default Header;