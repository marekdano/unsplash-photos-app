
import React, { Component } from 'react';
import axios from 'axios';
import { UNSPLASH_CLIENT_ID } from '../../constants';

class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ""
    }
  }

  componentDidMount() {
    const username = this.props.match.params.username;
		console.log("username: ", username);
    axios.get(`https://api.unsplash.com/users/${username}`, {
        params: {
          client_id: UNSPLASH_CLIENT_ID,
        }
      })
      .then(response => {
        this.setState({ user: response.data });
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    const { user } = this.state;
    
    if(user) {
      return (
        <div className="photo-details">          
          <img src={user.profile_image.medium} className="img-responsive" alt={`by ${user.name}`}/> 
					<h2 className="username">{user.name}</h2>  
					{user.bio && 
						<div>
							<label>Bio:</label>
							<p>{user.bio}</p>
						</div>
					}
					<div>
						<label>Photos:</label>
						<p>{user.total_photos}</p>
					</div>
        </div>
      )
    } else {
      return (
        <div>
          <p><em>The user does not exist.</em></p>
        </div>
      )
    }
  }
}

UserDetails.propType = {
	user: React.PropTypes.shape({
		username: React.PropTypes.string.isRequired
	})
}

export default UserDetails;