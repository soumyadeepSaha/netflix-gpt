import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptmoviesuggestions from './Gptmoviesuggestions'
import { BG_URL } from '../utils/constants'

const Gptsearch = () => {
  return (
    <div>
     <div className="absolute -z-10">
     <img 
     src={BG_URL}
     alt="logo"
     />
    </div>
    <Gptsearchbar />
    <Gptmoviesuggestions/>
      </div>

  )
}

export default Gptsearch