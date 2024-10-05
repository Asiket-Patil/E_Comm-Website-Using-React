import React from 'react'
import Hero from '../components/Hero/Hero'
import Item from '../components/Items/Item'
import Popular from '../components/Popular/Popular'
import Offer from '../components/Offers/Offer'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
