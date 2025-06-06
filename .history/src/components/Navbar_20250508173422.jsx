import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav>
      <div cl>
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
        </div>
      </div>
    </nav>

  )
}

export default Navbar
