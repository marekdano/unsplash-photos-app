import React from 'react';
import { NavLink } from 'react-router-dom'

const PhotoList = (props) => {
  return (
    <div className="photo-list">
      {props.photos.map(photo => {
        return (
          <div key={photo.id}>
            <NavLink exact to={`/photos/${photo.id}`}>
              <h2 className="username">{photo.user.name}</h2>
              <img src={photo.urls.thumb} role="presentation"/>
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}

PhotoList.propType = {
  photo: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      user: React.PropTypes.shape({
        username: React.PropTypes.string.isRequired,
      })
    })
  )
}

export default PhotoList;