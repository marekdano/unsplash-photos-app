
import React, { Component } from 'react';
import axios from 'axios';
import { UNSPLASH_CLIENT_ID } from '../../constants';
import { NavLink } from 'react-router-dom';

class UserPhotos extends Component {
	constructor(props) {
    super(props);

    this.state = {
      userPhotos: ""
    }
  }

	componentDidMount() {
		const username = this.props.match.params.username;
    axios.get(`https://api.unsplash.com/users/${username}/photos`, {
        params: {
          client_id: UNSPLASH_CLIENT_ID,
        }
      })
      .then(response => {
        this.setState({ userPhotos: response.data });
      })
      .catch(error => {
        console.log(error)
      })
	}

	goBack = () => {
    this.props.history.goBack();
  }

	render() {
		const { userPhotos } = this.state;

		return (
			<div>
				<button className="btn btn-default" onClick={this.goBack}> 
							<i className="fa fa-angle-left" aria-hidden="true"></i> Back</button>
				<div className="user-photos-list">
					{userPhotos &&
						userPhotos.map(photo => {
							return (
								<div className="photo" key={photo.id}>
									<NavLink to={`/photos/${photo.id}`}>
										<img className="photo-img" 
											   src={photo.urls.small} 
											   alt={`by ${photo.user.name}`} />
								  </NavLink>
								</div>
							)	
					})}
			  </div>
			</div> 
		) 
	}
}

UserPhotos.propType = {
  match: React.PropTypes.shape({
    params: React.PropTypess.shape({
      username: React.PropTypes.isRequired
    })
  })
}

export default UserPhotos;