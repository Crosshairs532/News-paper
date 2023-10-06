
import Marquee from "react-fast-marquee";
import { Link, Outlet, useLocation, useNavigation } from "react-router-dom";
import { BiLogoGoogle } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import q_zone1 from '../../../assets/qZone1.png'
import q_zone2 from '../../../assets/qZone2.png'
import q_zone3 from '../../../assets/qZone3.png'
import Category from "./Category/Category";
import { useContext } from "react";
import { catContext } from "../../../Hook/Hook";
const Home = () => {
    const { user } = useContext(catContext)
    const location = useLocation()
    console.log(location)
    const navigation = useNavigation()
    return (
        <div>

            <div>
                <div className="flex bg-slate-200 p-2">
                    <button className=" py-[5px] px-[26px] rounded-md bg-[#D72050]">Latest</button>
                    <Marquee pauseOnHover={true} gradientWidth={200} gradient={true} gradientColor="white" speed={100}>
                        <Link className="mr-12" to="/">I can be a React component, multiple React components.....</Link>
                        <Link className="mr-12" to="/">I can be a React component, multiple React components.....</Link>
                        <Link className="mr-12" to="/">I can be a React component, multiple React components.....</Link>
                    </Marquee>
                </div>
                <div>
                    <div className=" grid grid-cols-4 gap-10 justify-items-center max-h-screen mx-auto container">
                        <div className=" col-span-3 flex justify-between w-full mt-10">
                            {
                                !user ? <Category></Category> : <Category></Category>
                            }

                            {
                                navigation.state == 'loading' ? <h1>loading</h1> : <Outlet></Outlet>
                            }
                        </div>
                        <div className=" w-[300px] max-h-screen bg-slate-400 mt-10">
                            <div>
                                <h1 className=" text-center font-bold text-2xl">Login with</h1>
                                <div className=" w-full space-y-4 mt-3">
                                    <div className=" flex items-center gap-2 m-auto justify-center w-[90%] border-sky-600">
                                        <BiLogoGoogle></BiLogoGoogle>
                                        <button className=" text-sky-600">Login with Google</button>
                                    </div>
                                    <div className=" flex items-center gap-2 m-auto justify-center  w-[90%] border-sky-600">
                                        <AiFillGithub></AiFillGithub>
                                        <button className=" text-sky-600">Login with Github</button>
                                    </div>

                                </div>
                            </div>
                            <div className=" bg-lime-200">
                                <h1 className=" text-xl font-bold text-center mt-4">Q Zone</h1>
                                <div className=" mx-auto w-[240px] mt-4">
                                    <img className=" h-[195px]" src={q_zone1} alt="" />
                                    <img className=" h-[195px]" src={q_zone2} alt="" />
                                    <img className=" h-[195px]" src={q_zone3} alt="" />
                                </div>

                            </div>



                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Home;