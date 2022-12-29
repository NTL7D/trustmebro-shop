import { useState, useEffect } from "react";
import axios from "axios";

function ProductAPI() {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        axios
            .get("/api/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getProducts();
    }, []);

    return {
        products: [products, setProducts],
    };
}

export default ProductAPI;
