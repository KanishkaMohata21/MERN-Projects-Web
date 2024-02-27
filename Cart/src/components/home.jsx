import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import Product from "./product";


function Home(){
    const [productList,setProductList] = useState([])
    const [loading,setLoading] = useState(false)

    async function fetchProductList(){
        setLoading(true)
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setLoading(false)
        setProductList(data)
    }
    
    useEffect(()=>{
        fetchProductList()
    },[])

    return(
        <div className="container">
            {loading ? (
                <div className="loading">
                    Loading...Please Wait
                </div>
            ) : (
                <div className="product-container">
                    {productList && productList.length 
                        ? productList.map((item) => (
                            <Product key={item.id} product={item} />
                        ))
                        : null
                    }
                </div>
            )}
        </div>
    )
}

export default Home;
