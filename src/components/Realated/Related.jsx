import React from 'react'
import './Related.css'
import data_product from '../assets/data'
import Item from '../Items/Item'

const Related = () => {
    // console.log(data_product);
    
  return (
    <div className='related'>
      <h1>Related Products</h1>
      <hr />
      <div className="items">
      {
          data_product.map((item, index) => (
            <Item 
              key={index} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}  
            />
          ))
        }
      </div>
    </div>
  )
}

export default Related
