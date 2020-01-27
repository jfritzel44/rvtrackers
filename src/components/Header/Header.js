import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className='header-container'>
          <span className='header-nav-item'>Reviews</span>
        </div>
    );
  }
}

export default Header;
