import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  //const api_urll = "https://fakestoreapi.com/products/categories";

  const [products, setproducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const getproduct = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }
  const getcategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setcategories(data));
  }
  const getproductincategories = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then(res => res.json())
      .then(data => setproducts(data))
  }
  useEffect(() => {
    getproduct();
    getcategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">

        <button
          onClick={() => { getproduct(); }}
          className="btn btn-info ">All</button>
        {
          categories.map((cat) => {
            return (
              <button
                key={cat}
                onClick={() => { getproductincategories(cat); }}
                className="btn btn-info ">{cat}</button>
            );
          })
        }
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ProductsList;
