
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Users.css';

const UserList = (props) => {
  return (
    <div className="users-list">
      {props.users.map(user => {
        return (
          <div className="user-profile" key={user.id}>
            <NavLink exact to={`/users/${user.username}`}>
              <img className="img-circle profile-image-thumb" 
                    src={user.profile_image.small} 
                    alt={`profile of ${user.username}`} />
              <h5 className="username">{user.first_name} {user.last_name} </h5>
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}

UserList.propType = {
  user: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      username: React.PropTypes.string.isRequired
    })
  )
}

export default UserList;