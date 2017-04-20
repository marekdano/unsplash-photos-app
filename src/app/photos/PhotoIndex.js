import React, { Component } from 'react';

import PhotoList from './PhotoList';
import fetchPhotos from '../services/photo-service';
import './Photos.css';

class PhotoIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      loading: true
    }
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos = () => {
    fetchPhotos(this);
  };

  render() {
    console.log(this.state.photos);
    if (this.state.loading) {
      return (
        <div className="icon-loading">
          <i className="fa fa-camera fa-spin fa-2x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div> 
      );
    } else {
      return (
        <div className="photos text-center">
          <h2>Unsplash Beautiful Photos</h2>
          <PhotoList photos={this.state.photos} />
        </div>
      );
    }
  }
}

export default PhotoIndex;