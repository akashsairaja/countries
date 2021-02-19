import axios from 'axios';

const initialState = {
	countries: [],
	isModalOpen: false,
	filteredCountries: [],
	searchKey: '',
	selectedViewValues: {
		name: '',
		capital: '',
		region: '',
		subregion: '',
		population: 0,
		latlng: [],
		timezones: [],
		currencies: [],
		translations: {},
		flag: '',
	},
};

const requestUrl = 'https://restcountries.eu/rest/v2/all';


const getRestCountries = () => axios.get(requestUrl).then(({ data }) => data).catch(err => []);


export {
	initialState,
	getRestCountries,
	requestUrl
};
