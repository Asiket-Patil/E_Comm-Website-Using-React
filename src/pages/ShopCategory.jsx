import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropDown_icon from '../components/assets/dropdown_icon.png';
import Item from '../components/Items/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);


  console.log('All Products:', all_product); 

  const filteredProducts = all_product.filter(item => item.category === props.category);

  return (
    <div className='shop-category'>
      <img className='shopCategory-banner' src={props.banner} alt="Shop Banner" />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropDown_icon} alt="Sort Icon" />
        </div>
      </div>

      <div className="shopcategory-products">
        {
          filteredProducts.map((item, index) => (
            <Item 
              key={index} 
              id={item.id} 
              name={item.name} 
              image={item.image} // Ensure `image` has a valid URL or local path
              new_price={item.new_price} 
              old_price={item.old_price} 
            />
          ))
        }
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  );
}

export default ShopCategory;
