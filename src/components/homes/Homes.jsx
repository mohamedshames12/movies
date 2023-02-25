import React, { useState } from 'react'
import {homeData} from '../../DummyData'
import Home from './Home';
const Homes = () => {
    const [items, setItems] = useState(homeData);
  return (
    <>
        <section className='home'>
            <Home items={items}/>
        </section> 
        <div className="margin"></div>
    </>
  )
}

export default Homes
