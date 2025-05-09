import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav>
      <div className='container mx-auto px-4 md:px-16px lg:px-24px'>
        <div>
          <Link to='/'>e-Shop</Link>
        </div>
        <div>
          <form> 
            <input type="text" placeholder='Search Products' />
          </form>
        </div>
        <div>
          <Link to='/Cart'><FaShoppingCart/></Link>
          <button>Login | Register</button>
          <button><FaLog </button>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
