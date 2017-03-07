import React from 'react';
import requireAuth from '../Auth/require-auth';

class Dashboard extends Component {
  render() {
    const user = this.props.auth.getProfile();
    return (
         <div>Current user: {user.email}</div>
    );
  }
}

export default requireAuth(Dashboard);
