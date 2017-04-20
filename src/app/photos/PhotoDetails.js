
import React, { Component } from 'react';
import axios from 'axios';
import { UNSPLASH_CLIENT_ID } from '../../constants';

class PhotoDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: ""
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`https://api.unsplash.com/photos/${id}`, {
        params: {
          client_id: UNSPLASH_CLIENT_ID,
        }
      })
      .then(response => {
        this.setState({ photo: response.data });
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    const { photo } = this.state;
    
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