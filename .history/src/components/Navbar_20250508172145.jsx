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
            <input type="text" placeholder='' />
          </form>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
