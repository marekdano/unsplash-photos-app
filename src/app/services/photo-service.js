
import axios from 'axios';
import { UNSPLASH_CLIENT_ID } from '../../constants';

export function getLastPublishedPhotos(self) {
	axios.get('https://api.unsplash.com/photos', {
			params: {
				client_id: UNSPLASH_CLIENT_ID,
				per_page: 100
			}
		})
		.then(response => {
			self.setState({ 
				photos: response.data,
				loading: false,
				error: null
			});
		})
		.catch(error => {
			self.setState({ 
				photos: [],
				loading: false,
				error: error
			});
		});
}