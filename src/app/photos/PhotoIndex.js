import React, { Component } from 'react';
import axios from 'axios';

import PhotoList from './PhotoList';
import { UNSPLASH_CLIENT_ID } from '../../constants';
import './Photos.css';

class PhotoIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos = () => {
    axios.get('https://api.unsplash.com/photos', {
        params: {
          client_id: UNSPLASH_CLIENT_ID,
          per_page: 100
        }
      })
      .then(response => {
        console.log("Latest photos from unsplash: ", response.data);
        this.setState({ photos: response.data });
      })
      .catch(error => {
        console.log(error)
      });
  };

  render() {
    return (
      <div className="photos text-center">
        <h2>Unsplash Beautiful Photos</h2>
        <PhotoList photos={this.state.photos} />
      </div>
    );
  }
}

export default PhotoIndex;