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
          <Link></Link>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
