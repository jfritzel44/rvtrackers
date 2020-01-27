import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Moment from 'react-moment';
import ClampLines from 'react-clamp-lines';
import './ReviewCard.css';

function ReviewCard(props) {
    return (
      <div style={{width: props.width, height: props.height}} 
            className='reviewCard-container'>
            <div className='reviewCard-place'>{props.place}</div>
            
            <StarRatingComponent 
                name='stars' 
                starCount={props.starCount}
                value={props.rating}
            />

            <div className='reviewCard-content'>
                <ClampLines
                    text={props.content}
                    id='reviewCard-content-clamp'
                    lines={5}
                    ellipsis="..."
                    buttons={false}
                />
            </div>

            <div className='reviewCard-footer'>
                <span>{props.author}</span>
                <Moment className='reviewCard-date' format="YYYY/MM/DD">
                    {props.publishedAt}
                </Moment>
            </div>
      </div>
    );
}

export default ReviewCard;