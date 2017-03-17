import React from 'react';
import photos from '../../data/photos';

const PhotoDetails = (props) => {
  const id = props.match.params.id;
  const photo = photos.find(photo => {
    return photo.id === id;
  });

  if(photo) {
    return (
      <div className="photo-details">          
        <h2 className="username">{photo.user.name}</h2>
        <img src={photo.urls.regular} className="img-responsive" alt={`by ${photo.user.name}`}/>   
      </div>
    )
  } else {
    return (
      <div>
        <p><em>The picture does not exist.</em></p>
      </div>
    )
  }
}

PhotoDetails.propType = {
  photo: React.PropTypes.shape({
    user: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
    }),
    urls: React.PropTypes.shape({
      regular: React.PropTypes.string.isRequired,
    })
  })
}

export default PhotoDetails;