import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
function ProductsDetails() {
    const api_url = "https://fakestoreapi.com/products";
    const [product, setproduct] = useState({});
    const params = useParams();
    useEffect(() => {
        fetch(`${api_url}/${params.productID}`)
            .then((res) => res.json())
            .then((product) => setproduct(product));
    }, [params.productID])
    return (
        <Product product={product} showButton={false} />
    )
}
export default ProductsDetails;