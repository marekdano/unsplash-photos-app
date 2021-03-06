import React, { useState, useEffect } from 'react';
import PhotoList from './PhotoList';
import axios from 'axios';
import { UNSPLASH_CLIENT_ID } from '../../constants';
import LoadingIndicator from '../shared/LoadingIndicator';
import './Photos.scss';

const PhotoIndex = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [totalPages, setTotalPages] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchQuery(searchTerm.trim());
    setNextPage(1)
    setSearchResults([]);
  } 

  const handleLoadMore = () => {
    if (nextPage <= totalPages) {
			setNextPage(nextPage => nextPage + 1);
		}
  }

  useEffect(() => {
    function searchUnsplash() {
      if (!searchQuery) return;
      setIsLoading(true);

      axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          query: searchQuery,
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

        if (nextPage === 1) {
          setTotalPages(response.data.total_pages);
          setSearchResults([...response.data.results]);
        } else {
          setSearchResults((searchResults) => [...searchResults, ...response.data.results]);
        }
      })
      .catch(() => alert("An error occured!"))
      .finally(() => setIsLoading(false));
    }

    searchUnsplash();
  }, [searchQuery, nextPage]);

  return (
    <div className="photos text-center">
      <h2>Unsplash Beautiful Photos</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <input className="search-input" type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search Unsplash's library of over 1 million photos" />
      </form>
      <PhotoList photos={searchResults} />
      {isLoading && <LoadingIndicator />
      }
      {nextPage < totalPages && !isLoading && <button className="btn__loading" onClick={handleLoadMore}>View more</button>}
    </div>
  );
}

export default PhotoIndex;