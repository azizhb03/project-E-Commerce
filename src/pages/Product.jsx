import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import { Breakcrum } from '../component/Breadcrums/Breadcrum';
import { ProductDisplay } from '../component/ProductDisplay/ProductDisplay';

export const Product = () => {
  const {all_product}= useContext(ShopContext);
  const{productId}=useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breakcrum product={product}/>
      <ProductDisplay product={product}/>
        
    </div>
  )
}
