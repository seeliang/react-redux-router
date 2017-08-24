import {Link} from 'react-router-dom';
import React from 'react';

class Index extends React.Component {
  displayName: 'Index';
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1> Hello, i am the homepage</h1>
        <Link to={'/pages/'}>
          Go to page
        </Link>
      </div>
    );
  }
}

export default Index;