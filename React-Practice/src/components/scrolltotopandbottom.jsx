import React, { useState, useEffect } from 'react';

export default function Sttab() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products?limit=100');
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                setError(error);
            } finally {
                setPending(false);
            }
        };
        fetchData();
    }, []);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' 
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="sttab">
            <h1>All Products List</h1>
            <button onClick={scrollToBottom}>Scroll to bottom</button>
            <ul>
                {products.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            <button onClick={scrollToTop}>Scroll to top</button>
        </div>
    );
}
