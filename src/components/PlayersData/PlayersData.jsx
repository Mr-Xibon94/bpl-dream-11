import { Flag, User } from 'lucide-react';
import React from 'react';

const PlayersData = ({ players }) => {
    console.log(players);
    return (
        <div className='border border-gray-200 rounded-2xl m-5'>
            
            <div className='  m-5 '>
                <div>
                    <img className='h-[340px] w-[500px] rounded-2xl mx-auto mb-6' src={players.img} alt="" />
                </div>
                <div className='flex items-center gap-2.5 mb-4'>
                    <User className=' rounded-full'></User>
                    <h1 className='text-black text-2xl font-semibold'>  {players.name}</h1>
                </div>

                <div className='flex justify-between' >
                    <div className='flex gap-2.5'>
                        <Flag className='text-gray-400'></Flag>
                        <p className='text-gray-400'>{players.country}</p>
                    </div>
                    <p className='text-black shadow-gray-200 inline p-1.5 bg-gray-200 rounded-[5px] '><a href="">{players.category}</a></p>
                </div>

                <hr className='my-4 text-gray-300' />

                <h2 className='text-black font-medium'>Rating</h2>

                <div className='text-black font-medium flex justify-between my-4'>
                    <h2>{players.playingType.batting}</h2>
                    <h2>{players.playingType.bowling}</h2>
                </div>


                <div className='flex justify-between'>
                    <h2 className='text-black font-medium'>Price:${players.price}</h2>

                    <button className='text-gray-800 shadow-gray-200 bg-gray-100 p-1.5 rounded-[7px] text-[14px] '>Choose Player</button>

                </div>

            </div>



        </div>
    );
};

export default PlayersData;