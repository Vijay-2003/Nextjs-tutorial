'use client'
import { useEffect, useState } from 'react'
import React from 'react'

const Products = () => {
    const [product, setproducts] = useState([])
    const fetchProducts = async () => {
        let productList = await fetch('https://dummyjson.com/products');
        productList = await productList.json();
        console.log(productList);
        setproducts(productList.products);
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    
   return (
    <div className='container'> 
    <h2 className='text-center mt-2'>
        Products
    </h2>
    {
        product.map((p) => {
            return <div key={p.id}>
                <p>Name: {p.title}</p>
                <p>Price: {p.price}</p>
                <hr />
            </div>
        })
    }
    </div>
  )
}

export default Products