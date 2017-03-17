import React, { Component } from 'react';

import PhotoList from './PhotoList';
import photos from '../../data/photos';

class PhotoIndex extends Component {
  render() {
    return (
      <div className="photo-page">
        <h2>Unsplashed Photos</h2>
        <PhotoList photos={photos} />
      </div>
    );
  }
}

export default PhotoIndex;