import React, {Component} from 'react';
import ReviewJSON from '../../assets/reviews.json';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { withRouter } from "react-router-dom";
import './Reviews.css';

class Reviews extends Component {
  constructor(props) {
    super(props);

 
    this.goToDetails = this.goToDetails.bind(this);
  }

  goToDetails(id) {
    this.props.history.push("/review-details/" + id);
  }

  render() {
    return ( 
        <div className='reviews-container'>
            {ReviewJSON.map((review) => (
                <div onClick={() => this.goToDetails(review.id)}>
                    <ReviewCard 
                        width='258px'
                        height='208px'
                        key={review.id}
                        starCount={5} 
                        place={review.place}
                        rating={review.rating}
                        author={review.author} 
                        publishedAt={review.published_at}
                        content={review.content}
                    ></ReviewCard>
                </div>
            ))}
        </div>
    );  
  }
}

export default withRouter(Reviews);


