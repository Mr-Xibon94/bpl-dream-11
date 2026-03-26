import React, { use } from 'react';
import PlayersData from '../PlayersData/PlayersData';
import NavBar from '../NavBar/NavBar';

const AllplayersData = ({ playerDataPromise }) => {

    const playersInfo = use(playerDataPromise);
    // console.log(typeof playersInfo);
    return (
        <>

            <div className=' bg-white w-11/12 m-auto  '>
            <NavBar>
                
            </NavBar>
            <div className='mx-5 flex justify-between items-center mt-4'>
                <h1 className='text-3xl font-bold '>Available Players</h1>
                <div className='flex'>
                    <button className='text-[18px] py-1.5 px-6 font-bold rounded-l-[7px] border border-gray-200'>Avilable</button>
                    <button className='text-[18px] py-1.5 px-6 font-bold rounded-r-[7px] border border-gray-200'>Selected(0)</button>
                </div>

            </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 '>
                    {
                        playersInfo.map(players => <PlayersData key={players.id} players={players}></PlayersData>)
                    }

                </div>

            </div>
        </>
    );
};

export default AllplayersData;