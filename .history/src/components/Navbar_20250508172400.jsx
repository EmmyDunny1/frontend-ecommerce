import React from 'react'

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
          <Link to='/Cart'>FaShoppo</Link>
          <button>Login | Register</button>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
