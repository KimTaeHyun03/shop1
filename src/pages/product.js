import './product.css';
import React, { useState, useEffect } from 'react';
import pdList from '../pdList.js';  // pdList.js에서 데이터 가져오기





let Product = ()=>{
				let [products, setProducts] = useState([]);
				useEffect(() => {
    // pdList 데이터를 상태에 저장
    setProducts(pdList);
  }, []);
				
				
				
				return(
								<>
<h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li className="pdLi" key={product.id}>
        				{product.id}-
            {product.title} :{product.price}
        				<img className="pd_img" src = {process.env.PUBLIC_URL+ product.img_url}></img>
          </li>
        ))}
      </ul>
				
				
				
				</>
				)
}

export default Product;