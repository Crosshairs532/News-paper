import { Link, NavLink } from "react-router-dom";
import profile_pic from '../../assets/user.png'
import { useContext } from "react";
import { catContext } from "../../Hook/Hook";
const Navbar = () => {
    const { user, Logout, loader } = useContext(catContext)
    console.log(loader)
    const Links =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>


        </>


    const handleOut = () => {
        Logout()
            .then(() => console.log('signed out'))

    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">


                            {
                                Links
                            }
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            Links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={profile_pic} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    {
                        user && !loader ?
                            <button onClick={handleOut} className=" btn btn-primary">logout</button>
                            :
                            <Link to='/login'><button className=" btn btn-primary">login</button></Link>
                    }
                    <Link to='/register'> <button className=" btn btn-primary">Register</button></Link>
                </div>
            </div>

        </div >
    );
};

export default Navbar;