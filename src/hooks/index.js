import React from 'react';

import { initialState } from '../utils';


const countriesHook = () => {

	const [state, updateState] = React.useState(initialState);

	const { filteredCountries, countries } = state;

	const onSearchChange = (value) => {
		const newFilteredCountries = countries.filter((o) => o.name.toLowerCase().includes(value.toLowerCase()));
		updateState({
			...state,
			filteredCountries: newFilteredCountries,
			searchKey: value,
		});
	};

	const onDeleteItemClicked = (index) => {
		const newFilteredCountries = [...filteredCountries];
		const [country] = newFilteredCountries.splice(index, 1);
		const countryIndex = countries.findIndex(o => o.name === country.name);
		if (countryIndex !== -1) {
			const newCountries = [...countries];
			newCountries.splice(countryIndex, 1);
			updateState({
				...state,
				filteredCountries: newFilteredCountries,
				countries: newCountries,
			});
		}
	};

	const onModalOpenClicked = (index) => {
		const {
			name = '', latlng = [], timezones = [], currencies = [], translations = {}, flag = '',
			capital = '', region = '', subregion = '', population = 0,
		} = filteredCountries[index];
		const newSelectedValues = {
			name,
			latlng,
			timezones, currencies, translations, flag, capital, region, subregion, population,
		};
		updateState({
			...state,
			isModalOpen: true,
			selectedViewValues: newSelectedValues,
		});
	};

	const closeModal = () => updateState({
		...state,
		isModalOpen: false,
	});

	return [state, updateState, onModalOpenClicked, closeModal, onDeleteItemClicked, onSearchChange];

};

export default countriesHook;
