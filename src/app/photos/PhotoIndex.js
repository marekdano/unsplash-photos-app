import React, { Component } from 'react';

import PhotoList from './PhotoList';
import photos from '../../data/photos';
import './Photos.css';

class PhotoIndex extends Component {
  render() {
    return (
      <div className="photos text-center">
        <h2>Unsplash Beautiful Photos</h2>
        <PhotoList photos={photos} />
      </div>
    );
  }
}

export default PhotoIndex;