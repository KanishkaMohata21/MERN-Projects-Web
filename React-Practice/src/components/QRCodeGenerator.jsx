import React, { useState } from 'react';
import QRCode from 'react-qr-code';

export default function QRCodeGenerator() {
    const [value, setValue] = useState('');
    const [input, setInput] = useState('');

    const handleGenerate = () => {
        setValue(input);
    };

    return (
        <div>
            <h1>QR Code Generator</h1>
            <input 
                type="text"
                name='qr-code'
                placeholder='Enter your string'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <div>
                <QRCode 
                    value={value} 
                />
            </div>
            <button onClick={handleGenerate}>Generate</button>
        </div>
    );
}
