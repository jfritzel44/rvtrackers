import React, {Component} from 'react';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import ReviewJSON from '../../assets/reviews.json';
import ReviewComment from '../../components/ReviewComment/ReviewComment';
import {withRouter} from 'react-router-dom';
import './ReviewDetails.css';

class ReviewDetails extends Component {
  constructor(props) {
    super(props);   

    this.state = {
        review: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const review = this.getReviewCard(id);

    this.setState({
        review: review
    })
  }

  getReviewCard(id) {
    let reviews = ReviewJSON;
    return reviews.filter(r => r.id === id)[0];
  }

  render() {
    return ( 
        <div className='reviewDetails-container'>
            { this.state.review ? 
            <ReviewCard 
                height='100%'
                key={this.state.review.id}
                starCount={5}
                maxLine={5}
                place={this.state.review.place}
                rating={this.state.review.rating}
                author={this.state.review.author} 
                publishedAt={this.state.review.published_at}
                content={this.state.review.content}
            ></ReviewCard>
            : null }
            <ReviewComment />
        </div>
    );  
  }
}

export default withRouter(ReviewDetails);
