import React, { Component } from 'react';
import photos from '../../../data/photos';

class PhotosPage extends Component {
  render() {
    return (
      <div className="photo-page">
        <p className="photo-page-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <i className="fa fa-2x fa-meetup" aria-hidden="true"></i>
      </div>
    );
  }
}

export default PhotosPage;