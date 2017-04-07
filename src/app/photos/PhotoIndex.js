import React, { Component } from 'react';
import axios from 'axios';

import PhotoList from './PhotoList';
import { UNSPLASH_CLIENT_ID } from '../../constants';
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
    axios.get('https://api.unsplash.com/photos', {
        params: {
          client_id: UNSPLASH_CLIENT_ID,
          per_page: 100
        }
      })
      .then(response => {
        this.setState({ 
          photos: response.data,
          loading: false
        });
      })
      .catch(error => {
        console.log(error)
      });
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="icon-loading">
          <i className="fa fa-camera fa-spin fa-3x fa-fw"></i>
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