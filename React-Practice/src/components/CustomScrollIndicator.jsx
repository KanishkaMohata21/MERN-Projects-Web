import React, { useState, useEffect } from 'react';

export default function CustomScrollIndicator() {
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

    return (
        <div>
            <h1>Custom Scroll Indicator</h1>
            <ul>
                {products.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}