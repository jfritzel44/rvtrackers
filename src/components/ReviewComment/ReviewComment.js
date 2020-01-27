import React, {Component} from 'react';
import Moment from 'react-moment';
import './ReviewComment.css';

class ReviewComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
        comment: null,
        addComment: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  handleChange(event) {
    this.setState({
        comment: event.target.value
    });
  }

  addComment() {
    this.setState({
        addComment: true
    });
  }

  editComment() {
    this.setState({
        addComment: false
    });
  }

  render() {
    return (
        <div>
            {!this.state.addComment ?
            <div className='reviewComment-addComment'>
                <textarea 
                    onChange={this.handleChange} 
                    value={this.state.comment} 
                    rows="10"> 
                </textarea>
                
                <button className='reviewComment-btn' onClick={() => this.addComment()}>Add Comment
                </button>
            </div>
            : '' }

            {this.state.addComment ? 
            <div className='reviewComment-comment'>
                <button 
                    onClick={() => this.editComment()} 
                    className='reviewComment-edit'> ...
                </button>

                {this.state.comment}

                <div className='reviewComment-footer'>
                    <span>John Fritzel</span>
                    <Moment className='reviewComment-date' format="YYYY/MM/DD"></Moment>
                </div>
            </div>            
            : '' }
        </div>
    );
  }
}

export default ReviewComment;
