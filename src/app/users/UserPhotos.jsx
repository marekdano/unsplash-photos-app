
import React, { Component } from 'react';
import axios from 'axios';
import { UNSPLASH_CLIENT_ID } from '../../constants';

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
		
		console.log("UserPhotos: ", userPhotos);

		return (
			<div>
				<button className="btn btn-default" onClick={this.goBack}> 
							<i className="fa fa-angle-left" aria-hidden="true"></i> Back</button>
				<div className="user-photos-list">
					{userPhotos &&
						userPhotos.map(photo => {
							return (
								<div key={photo.id}>
									<img className="" 
											src={photo.urls.small} 
											alt={`by ${photo.user.name}`} />
								</div>
							)	
					})}
			  </div>
			</div> 
		) 
	}
}

export default UserPhotos;