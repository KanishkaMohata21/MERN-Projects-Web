import React from 'react';

export default function Sts() {
    const scrollToFourthCard = () => {
        const fourthCard = document.getElementsByClassName('section')[3];
        fourthCard.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="sts">
            <h1>Scroll to a section</h1>
            <button onClick={scrollToFourthCard}>Click to scroll</button>
            <div className="card">
                <div className="red section">First card</div>
                <div className="green section">Second card</div>
                <div className="yellow section">Third card</div>
                <div className="blue section">Fourth card</div>
                <div className="black section">Fifth card</div>
            </div>
        </div>
    );
}
