import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Layout = () => {


    return (
        <div>
            <div className=" container mx-auto">
                <div className=" ">
                    <Header></Header>
                    <Navbar></Navbar>
                </div>

                <div className=" mt-6">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Layout;