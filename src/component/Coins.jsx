import React from 'react'
import CoinItems from './CoinItems'
import {Link} from "react-router-dom"
import Coin from '../routes/Coin'

const Coins = (props) => {

 

  return (

    <div className='max-w-[1100px] m-auto mt-6 '>
   
        <div>
            <div className='mx-6 font-bold flex justify-between items-center bg-[#72716e] py-1 shadow shadow-[#51557E] px-6 sticky top-0 navbar-custom' >
                <p>#</p>
                <p>Coins</p>
                <p>price</p>
                <p>24h</p>
                <p className='hidden md:flex'>volume</p>
                <p className='hidden md:flex'>market cap</p>
            </div>
            {props.coins.map(coins => {
                    return (
                      <Link to={`/coin/${coins.id}` } element={<Coin />} key={coins.id} >
                        <CoinItems coins={coins} />
                      </Link>
                        
                      
                    )
              })}
        </div>

    </div>
  )
}

export default Coins



      