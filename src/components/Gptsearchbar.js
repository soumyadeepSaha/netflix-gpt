import React from 'react'
import lang from '../utils/languageconstants'

const Gptsearchbar = () => {
  return (
    <div className="pt-[20%] flex justify-center">
    <form className="w-1/2 bg-black grid grid-cols-12">
       <input type="text" className="p-4 m-4 col-span-9" placeholder={lang.hindi.gptsearchplaceholder}/>
       <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">{lang.hindi.search}</button>
    </form>
    
    </div>
  )
}

export default Gptsearchbar