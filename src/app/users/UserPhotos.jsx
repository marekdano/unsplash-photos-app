
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import { UNSPLASH_CLIENT_ID } from '../../constants';
import { NavLink } from 'react-router-dom';
import '../photos/Photos.scss';

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
				<div className="photo-list">
					{userPhotos &&
						userPhotos.map(photo => {
							return (
								<div className="photo-card" key={photo.id}>
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.isRequired
    })
  })
}

export default UserPhotos;