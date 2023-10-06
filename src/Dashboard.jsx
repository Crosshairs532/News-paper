/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div className=' flex'>
            <div className='w-[20%] bg-slate-400'>
                <ul>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/dashboard/profile'>profile</Link></li>
                    <li><Link to='/dashboard/edit profile'>Edit profile</Link></li>

                </ul>

            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;