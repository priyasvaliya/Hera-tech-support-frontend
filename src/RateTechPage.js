import {useState} from "react";
import {Rating} from 'react-simple-star-rating';

function RateTechPage() {
    
    const [rating, setRating] = useState(0);
    const handleRating = (rate) => {
        setRating(rate)
      }
    
    return (
        <div className='App'>
        <br></br>
        <h3> Rate your tech support provider</h3>
        <Rating
          onClick={handleRating}
          ratingValue={rating}
          size={80}
          label= "Rate the technician"
          transition
          fillColor='orange'
          emptyColor='gray'
          className='foo' // Will remove the inline style if applied
        />
        {/* Use rating value */}
       
      </div>
    );

}

export default RateTechPage;