import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Desc from '../components/Descriptionbox/Desc';
import Related from '../components/Realated/Related';

const Product = () => {
  const { all_product } = useContext(ShopContext); 
  const {productId} = useParams(); 
  // console.log("Produtid" ,productId);
  
  const product = all_product.find((e) => e.id === Number(productId)); 
  // console.log(product);
  

  if (!product) {
    return <p>Product not found</p>; 
  }

  return (
    <div className='red'>
      <Breadcrum product={product}/>
      <ProductDisplay product={product} />
      <Desc/>
      <Related/>
    </div>
  );
};

export default Product;
