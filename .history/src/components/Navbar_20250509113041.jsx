import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav>
      <div className='container flex mx-auto px-4 md:px-16px lg:px-24px justify-between items-center'>
        <div>
          <Link to='/'>e-Shop</Link>
        </div>
        <div className='relative flex-1 mx-4'>
          <form> 
            <input type="text" placeholder='Search Products' className='w-full px-2 py-4' />
            <FaSearch className='absolute top-3 right-3 text-red-500'/>
          </form>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to='/Cart'><FaShoppingCart/></Link>
          <button className='hidden md:block'>Login | Register</button>
          <button cl><FaUser/> </button>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
