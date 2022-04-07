import React from 'react'
import { useMemo } from 'react';
import useFetchingData from '../sevices/useFetchingData';
import Gallery_Box from './gallery_box/Gallery_Box'
const City = () => {
let paramCity = useMemo(()=>({q: 'city', per_page: 5}), []);
let {gallerys, loading, error} = useFetchingData(paramCity)
console.log(gallerys)
    // console.log(cityData)
  return (
    <div className="popular_gallerys">
            {gallerys.map((item, index)=>(<Gallery_Box key={index} id={item.id} image={item.webformatURL} name={item.tags} pro={item.comments}/>))}
    </div>
  )
}

export default City