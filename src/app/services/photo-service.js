
import axios from 'axios';
import { UNSPLASH_CLIENT_ID } from '../../constants';

export default function (self) {
	axios.get('https://api.unsplash.com/photos', {
			params: {
				client_id: UNSPLASH_CLIENT_ID,
				per_page: 100
			}
		})
		.then(response => {
			self.setState({ 
				photos: response.data,
				loading: false
			});
		})
		.catch(error => {
			console.warn(error)
		});
}