import React, { useState } from 'react';

export default function HideonClick() {
    const [hide, setHide] = useState(true);

    const handleClickOutside = () => {
        console.log('Window is clicked')
        setHide(true);
    };

    window.addEventListener('click', handleClickOutside);

    const showContent = (event) => {
        console.log('Button is clicked')
        event.stopPropagation(); // Stop the click event from propagating to the window
        setHide(false);
    }

    return (
        <div>
            {
                hide
                ? <button onClick={showContent}>Click to Show</button>
                : <div>Hello I am Kanishka</div>
            }
        </div>
    );
}
