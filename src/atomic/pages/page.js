import React from 'react';

import UserLink from '../atoms/link';

class Page extends React.Component {
  displayName: 'Page';
  constructor(props) {
    super(props);
  }

  lists() {
    return this.props.feed.feed.results.map(
      (user,i) => {
        return (
          <UserLink
            key={i}
            name={user.name}
            to={'/people/' + i}
          />
        );
      });
  }

  render() {
    return (
      <div>
        {this.lists()}
      </div>
    );
  }
}

export default Page;
