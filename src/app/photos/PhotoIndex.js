import React, { useState, useEffect } from 'react';
import PhotoList from './PhotoList';
import axios from 'axios';
import { UNSPLASH_CLIENT_ID } from '../../constants';
import { getLastPublishedPhotos } from '../services/photo-service';
import './Photos.scss';

const PhotoIndex = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [totalPages, setTotalPages] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchQuery(searchTerm.trim());
  } 

  useEffect(() => searchUnsplash(searchTerm),
    [searchQuery]
  );

  const searchUnsplash = () => {
    if (!searchTerm) return;

    setLoading(true);

    axios.get(`https://api.unsplash.com/search/photos`, {
			params: {
				query: searchTerm.trim(),
				page: nextPage,
				per_page: 28,
				client_id: UNSPLASH_CLIENT_ID,
			}
		})
		.then(response => {
			if (response.data.total === 0) {
				alert("No photos were found for your search query.")
				return;
			}

			setSearchResults([...response.data.results]);
      setTotalPages(response.data.total_pages);

			// if (nextPage < totalPages) {
			// 	setNextPage(nextPage => nextPage + 1);
			// }
		})
	  .catch(() => alert("An error occured!"))
    .finally(() => setLoading(false));
  }

  return (
    <div className="photos text-center">
      <h2>Unsplash Beautiful Photos</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <input className="search-input" type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search Unsplash's library of over 1 million photos" />
      </form>
      {loading 
      ? 
      <div className="icon-loading">
        <i className="fa fa-camera fa-spin fa-2x fa-fw"></i>
        <span className="sr-only">Loading...</span>
      </div> 
      : 
        <PhotoList photos={searchResults} />
      }
      {nextPage <= totalPages && 
        <button>Load more</button>}
    </div>
  );
}

export default PhotoIndex;