import React from 'react';
import Logo from '../../assets/logo.png'
import Dollar from '../../assets/dollar_1.png'

const NavBar = () => {
    return (
        <>
            <nav className='flex justify-between mx-5 py-6'>
                <div>
                    <div>
                        <img className='w-20 h-16' src={Logo} alt="" />
                    </div>
                </div>
                <div className='flex'>
                    <ul className='flex gap-5 items-center'>
                    <li><a href="./">Home</a></li>
                    <li><a href="./fixture">Fixture</a></li>
                    <li><a href="./teams">Teams</a></li>
                    <li><a href="./Schedules">Schedules</a></li>
                </ul>

                <div className='p-5 '>
                    <div className='flex gap-2 items-center font-bold px-3 py-2 rounded-2xl border border-gray-200 '>
                        <p>0 coin</p>
                    <div>
                        <img className='object-contain w-5 h-5 ' src={Dollar} alt="" />
                    </div>
                    </div>
                </div>
                </div>
                
            </nav>
        </>
    );
};

export default NavBar;