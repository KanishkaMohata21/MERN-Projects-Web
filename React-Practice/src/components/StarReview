import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Review({ noofStars }) {
  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(id) {
    setRate(id);
  }

  function handleMouseMove(id) {
    setHover(id);
  }

  function handleMouseLeave() {
    setHover(0);
  }

  return (
    <div className="review">
      {[...Array(noofStars)].map((_, idx) => {
        const starId = idx + 1;
        return (
          <FaStar
            key={idx}
            className={starId <= (hover || rate) ? 'active' : 'inactive'} 
            onClick={() => handleClick(starId)}
            onMouseMove={() => handleMouseMove(starId)}
            onMouseLeave={handleMouseLeave}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default Review;
