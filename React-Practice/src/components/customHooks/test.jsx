import React from 'react';
import useFetch from './usefetch';
import Windowsize from './windowSize';

function TestComponent() {
    const { data, error, pending } = useFetch('https://dummyjson.com/products');
    const { width, height } = Windowsize(); 

    return (
        <div>
            <div className="usefetch">
                <h1>Testing useFetch Hook</h1>
                {pending && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {data && data.products && (
                    <ul>
                        {data.products.map(item => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="windowsize"> 
                <h2>Window Size</h2>
                <p>Width: {width}px</p>
                <p>Height: {height}px</p>
            </div>
        </div>
    );
}

export default TestComponent;
