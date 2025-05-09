import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <Link to='/'>e-Shop</Link>
        </div>
        <div>
          <form> 
            <input type="text" placeholder='Search Products' />
          </form>
        </div>
        <div>
          <Link to='/Cart'><FaShoppingCart</Link>
          <button>Login | Register</button>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
