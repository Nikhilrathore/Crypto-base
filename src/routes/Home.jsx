import React from 'react'
import CoinSearch from '../components/CoinSearch'
import Tranding from '../components/Tranding'


const Home = ({coins}) => {
  return (
    <div>
        <CoinSearch coins={coins}/>
        <Tranding/>
    </div>
  )
}

export default Home
