
import React from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import './Users.scss';

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
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      profile_image: PropTypes.shape({
        small: PropTypes.string.isRequired
      })
    })
  )
}

export default UserList;