import React, { useState } from 'react'
import Homes from '../components/homes/Homes'
import Upcomming from '../components/Upcomming/Upcomming'
import { upcome } from '../DummyData';

const HomePage = () => {
  const [items, setItems] = useState(upcome);

  return (
    <>
        <Homes />
        <Upcomming  items={items} title="Upcomming Movies"/>
    </>
  )
}

export default HomePage