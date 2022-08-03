import React from 'react'

const CoinItems  = (props) => {
  return (
    
    <div className='mx-6 flex justify-between items-center bg-[#1B1A17] shadow shadow-[#51557E] coin-row my-4 py-3 px-6'>
        <p >{props.coins.market_cap_rank}</p>
        <div className='flex'>
            <img className='w-auto h-[30px] pr-3' src={props.coins.image} alt="coin-icon" />
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>${props.coins.current_price.toLocaleString()}</p>
        {props.coins.price_change_percentage_24h ? 
        (props.coins.price_change_percentage_24h < 0 ? <p className='text-[#FF0000]'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p> : <p className='text-[#00ff37]'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>)
        : null
        } 
        <p className='hidden md:flex'>${props.coins.total_volume.toLocaleString()}</p>
        <p className='hidden md:flex'>${props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default  CoinItems 