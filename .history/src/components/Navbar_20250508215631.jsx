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
            <input type="text" placeholder='Search Products' />
            <FaSearch
          </form>
        </div>
        <div>
          <Link to='/Cart'><FaShoppingCart/></Link>
          <button>Login | Register</button>
          <button><FaUser/> </button>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
