import React, { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var styles = {
    hidden: {
        display: 'none',
    },
    star: {
        cursor: 'pointer',
        transition: 'color 200ms',
    }
}

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return <label key={ratingValue} for="rating">
                <input 
                    type="radio" 
                    name="rating" 
                    id="rating"
                    aria-label="rating" 
                    style={styles.hidden} 
                    value={ratingValue} 
                    onClick={() => setRating(ratingValue)} 
                    />
                <FontAwesomeIcon 
                    icon={['fas', 'star']} 
                    fixedWidth 
                    size="2x" style={styles.star}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    color={ratingValue <= ( hover || rating ) ? "#FFD970" : "#DAE4F2"} />
            </label>
        })}
    </div>
};

export default StarRating