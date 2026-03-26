
import { Suspense } from 'react'
import './App.css'
import AllplayersData from './components/AllplayersData/AllplayersData'

function App() {
  const playerDataPromise = fetch('playerdata.json')
        .then(res=> res.json());

        // console.log(typeof playerDataPromise)


  return (
    <>
      <p className='text-5xl font-bold text-center text-blue-500 mb-10'>BPL DREAM 11 Project</p>
    
      <Suspense fallback={<div className='flex min-h-screen items-center justify-center'>
          <span className=" loading loading-spinner loading-lg"></span>
        </div>}>
        <AllplayersData playerDataPromise={playerDataPromise}>

        </AllplayersData>
      </Suspense>
    </>
  )
}

export default App
