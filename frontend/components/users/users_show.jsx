import React from 'react';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUser(this.props.match.params.userId);
  }

  render() {
    const { user } = this.props
    if (!user) return null;
    return (
      <div>
        <p>{this.props.user.first_name}</p>
      </div>
    )
  }
}

export default UserShow;
