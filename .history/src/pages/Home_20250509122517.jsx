import React from 'react'
import {Categories} from '../assets/mockData'

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>SHOP BY CATEGORIES</div>
            <ul>
              {Categories.map((ategory, index)=>(
                <li key={index}>
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
