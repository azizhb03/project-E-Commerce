import React from 'react'
import Hero from '../component/hero/Hero'
import { Popular } from '../component/Popular/Popular'
import { Offers } from '../component/Offers/Offers'
import { NewCollections } from '../component/NewCollections/NewCollections'
import { NewsLetter } from '../component/NewsLetter/NewsLetter'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>

        
    </div>
  )
}
