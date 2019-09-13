import React, { Component } from 'react';
import PhotoList from './PhotoList';
import fetchPhotos from '../services/photo-service';
import './Photos.scss';

class PhotoIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      loading: true,
      error: null
    }
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos = () => {
    fetchPhotos(this);
  };

  render() {
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
        <div className="photos text-center">
          <h2>Unsplash Beautiful Photos</h2>
          <PhotoList photos={this.state.photos} />
        </div>
      );
    }
  }
}

export default PhotoIndex;