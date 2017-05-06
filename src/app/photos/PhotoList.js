import React from 'react';
import { NavLink } from 'react-router-dom'
import './Photos.css';

const PhotoList = (props) => {
  return (
    <div className="photo-list">
      {props.photos.map(photo => {
        return (
          <div className="photo" key={photo.id}>
            <NavLink exact to={`/photos/${photo.id}`}>
              <div className="photo-img">
                <img src={photo.urls.thumb} alt={`by ${photo.user.name}`}/>
              </div>
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
  photos: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      user: React.PropTypes.shape({
        username: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        profile_image: React.PropTypes.shape({
          thumb: React.PropTypes.string.isRequired,
          small: React.PropTypes.string.isRequired,
          regular: React.PropTypes.string.isRequired
        })
      })
    })
  )
}


export default PhotoList;