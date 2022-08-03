import React from 'react'
import {FaCoins } from "react-icons/fa"
import {Link} from "react-router-dom"


const Navbar = () => {

  return (
    <Link to="/" className=''>
        <div className='flex justify-center items-center'>
            <FaCoins size={30} className="text-[#6900ff]"/>
            <h1 className='flex text-4xl ml-4 font-bold  my-5'><p className=''>Coin</p> <p className='pl-2 text-[#6900ff]'>price tracker</p></h1>
        </div>
    </Link>
  )
}

export default Navbar