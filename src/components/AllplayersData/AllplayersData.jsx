import React, { use, useState } from 'react';
import PlayersData from '../PlayersData/PlayersData';
import NavBar from '../NavBar/NavBar';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const AllplayersData = ({ playerDataPromise }) => {

    const playersInfo = use(playerDataPromise);
    // console.log(typeof playersInfo);

    const [coins, setcoins] = useState(5000000);

    const [selectedBtn, setselectedBtn] = useState('available')

    const [selectedPlayers, setselectedPlayers] = useState([])
 console.log("rerender")
    
    return (
        <>

            <div className=' bg-white w-11/12 m-auto  '>
                <NavBar coins={coins}>

                </NavBar>
                <div className='mx-5 flex justify-between items-center mt-4'>
                    {selectedBtn === 'selected' ? <h1 className='text-3xl font-bold '>Selected Players ({selectedPlayers.length}/12)</h1> : <h1 className='text-3xl font-bold '>Available Players</h1>}
                    <div className='flex'>

                        <button onClick={() => setselectedBtn('available')} className={`cursor-pointer text-[18px] py-1.5 px-6 font-bold rounded-l-[7px] border border-gray-200 ${selectedBtn === 'available' ? 'bg-green-300' : ''}`}>Avilable</button>

                        <button onClick={() => setselectedBtn('selected')} className={`text-[18px] py-1.5 px-6 font-bold rounded-r-[7px] border border-gray-200 cursor-pointer ${selectedBtn === 'selected' ? 'bg-green-300' : ''}`}>Selected({selectedPlayers.length})</button>
                    </div>

                </div>


                <div >
                    {selectedBtn === 'available' ?
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 '>
                            {
                                playersInfo.map(players => <PlayersData key={players.id} coins={coins} setcoins={setcoins} players={players} selectedPlayers={selectedPlayers} setselectedPlayers={setselectedPlayers}></PlayersData>)
                            }
                        </div>

                        :
                        <div  className='min-h-screen border border-indigo-700 mx-auto h-15 w-full'>
                            {
                                selectedPlayers.length == 0 ? 
                <div className='text-center p-15'>
                    <h1 className='text-2xl font-bold'>
                        No Players is selected yet.
                    </h1>
                    <p className='text-[16px] text-gray-400 font-medium'>Go to Available tab to select players</p>
                </div>:
                                selectedPlayers.map(singlePlayer => <SelectedPlayers  key={singlePlayer.id} setselectedPlayers={setselectedPlayers} selectedPlayers={selectedPlayers} singlePlayer={singlePlayer} coins={coins} setcoins={setcoins}/>)
                            }
                        </div> }




                </div>

            </div>
        </>
    );
};

export default AllplayersData;