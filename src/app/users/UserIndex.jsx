
import React, { Component } from 'react';
import fetchPhotos from '../services/photo-service';
import UserList from './UserList';

class UserIndex extends Component {
	constructor(props) {
    super(props);

    this.state = {
      photos: [],
			users: [],
			loading: true,
			error: null,
    }
  }

	componentDidMount() {
    this.getPhotos();
  }

	getPhotos() {
		fetchPhotos(this);
	}

	getUsers() {
		const users = this.state.photos.map(photo => {
			return photo.user;
		});

		const uniqueUsersID = this.getUniqueUsersId(users);

		const uniqueUsers = uniqueUsersID.map(userId => {
			return users.find(user => {
				return user['id'] === userId;
			})
		});

		return uniqueUsers;
	}

	getUniqueUsersId(users) {
		let uniqueUsersID = new Set();
		const usersID = users.map(user => {
			return user.id;
		})
		usersID.forEach(id => {
			uniqueUsersID.add(id);
		});
		//converting Set to Array before returning
		return [...uniqueUsersID];
	}
	
	render() {
		const users = this.getUsers();
		if (this.state.loading) {
      return (
        <div className="icon-loading">
          <i className="fa fa-camera fa-spin fa-2x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div> 
			);
		} else if (this.state.error) { 
      return (
        <div>{this.state.error.message}</div>
      )
    } else {
      return (
        <div className="text-center">
          <h2>List of Users</h2>
          <UserList users={users} />
        </div>
      );
    }
	}
}

export default UserIndex;