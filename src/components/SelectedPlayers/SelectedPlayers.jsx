import { Trash } from 'lucide-react';


const SelectedPlayers = ({ singlePlayer, setselectedPlayers, selectedPlayers, coins, setcoins }) => {
    console.log(singlePlayer.length);

    const selectlistHandler = (singlePlayer) => {
        console.log(singlePlayer);
        console.log(selectedPlayers);
        const removPlayer = selectedPlayers.filter(deletPlayer => deletPlayer.id !== singlePlayer.id)
        setcoins(coins + singlePlayer.price);
        setselectedPlayers(removPlayer);
    }
    console.log(selectedPlayers);
    return (
        <>

            
             
                <div className='border border-red-500 m-5 rounded-[8px] p-5 flex justify-between'>
                    <div className='flex items-center'>
                        <img className='w-20 h-16 rounded-xl mr-5 ' src={singlePlayer.img} alt="" />

                        <div className='space-y-2'>
                            <h1 className='text-xl font-medium'>{singlePlayer.name}</h1>
                            <div >
                                <h2 className='text-[14px] text-gray-500'>{singlePlayer.playingType.batting}</h2>
                                <h2 className='text-[14px] text-gray-500'>{singlePlayer.playingType.bowling}</h2>
                            </div>
                        </div>

                    </div>

                    <div className='flex items-center'>
                        <Trash onClick={() => selectlistHandler(singlePlayer)}></Trash>
                    </div>


                </div>
            
        
        </>
    );
};

export default SelectedPlayers;