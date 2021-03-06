
import React, { Component } from 'react';
import PropTypes from 'prop-types'
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

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { photo } = this.state;
    
    if(photo) {
      return (
        <div className="photo-details">  
          <button className="btn btn-default" onClick={this.goBack}> 
            <i className="fa fa-angle-left" aria-hidden="true"></i> Back</button>        
          <h2 className="username">{photo.user.name}'s photo</h2>
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
}

export default PhotoDetails;