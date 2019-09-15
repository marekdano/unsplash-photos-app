import React from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './Photos.scss';

const PhotoList = (props) => {
  return (
    <div className="photo-list">
      {props.photos.map(photo => {
        return (
          <div className="photo-card" key={photo.id}>
            <NavLink exact to={`/photos/${photo.id}`}>
              <img className="photo-img" src={photo.urls.small} alt={`${photo.description || ''} by ${photo.user.name}`}/>
              <h5 className="username"><em>by</em> {photo.user.name} 
              <img className="img-circle profile-image-thumb" 
                  src={photo.user.profile_image.small} 
                  alt={`profile of ${photo.user.name}`} />
              </h5>
            </NavLink>
          </div>
        )
      })}
    </div>       
  )
}

PhotoList.propType = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        profile_image: PropTypes.shape({
          thumb: PropTypes.string.isRequired,
          small: PropTypes.string.isRequired,
          regular: PropTypes.string.isRequired
        })
      })
    })
  )
}


export default PhotoList;