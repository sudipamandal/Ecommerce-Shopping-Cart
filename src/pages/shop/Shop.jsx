// import React from "react";
// import Products from "../Products";
// import Product from "../../components/Product";
// import "./Shop.css";
// const Shop = () => {
//   return (
//     <div>
//       <div className="shop">
//         <div className="shopTitle">
//           <h1>Sudipa's Shop</h1>
//         </div>
//         <div className="products">
//           {Products.map((product) => (
//             <Product data={product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;

import React, { useState, useEffect } from "react";
import Product from "../../components/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <div className="shop">
        <div className="shopTitle">
          <h1>The Fashion Fusion</h1>
        </div>
        <div className="products">
          {products.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
