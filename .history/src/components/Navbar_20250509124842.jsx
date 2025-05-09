import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='shadow-md bg-white'>
      <div className='container flex mx-auto px-4 md:px-16px lg:px-24px justify-between items-center'>
        <div>
          <Link to='/'>e-Shop</Link>
        </div>
        <div className='relative flex-1 mx-4'>
          <form> 
            <input type="text" placeholder='Search Products' className='w-full  border rounded px-2 py-4' />
            <FaSearch className='absolute top-5 right-3 text-red-500'/>
          </form>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to='/Cart'><FaShoppingCart/></Link>
          <button className='hidden md:block'>Login | Register</button>
          <button className='block md:hidden'><FaUser/> </button>
        </div>
      </div>

      {/* Navigation header */}
      <div className='flex items-center jus'>
        <Link to='/' className='hover:underline'>Home </Link>
        <Link to='/' className='hover:underline'>Shop </Link>
        <Link to='/' className='hover:underline'>Contact </Link>
        <Link to='/' className='hover:underline'>About </Link>


      </div>
    </nav>

  )
}

export default Navbar
