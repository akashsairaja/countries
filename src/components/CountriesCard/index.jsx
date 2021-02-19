import React from 'react';
import PropTypes from 'prop-types';

import { Col, Card, CardBody, CardHeader } from 'reactstrap';


const CountriesCard = ({ name, population, capital, flag, onModalOpenClicked, onDeleteItemClicked, index }) => (
	<Col xl={4} md={4} sm={12} className="px-2 py-2">
		<Card className="countries--card">
			<CardHeader className="bg-white overflow-hidden">
				<div className="float-right">
					<button type="button" onClick={() => onDeleteItemClicked(index)}>
						<i className="bi bi-trash"/>
					</button>
					<button type="button" onClick={() => onModalOpenClicked(index)}>
						<i className="bi bi-arrows-fullscreen"/>
					</button>
				</div>
			</CardHeader>
			<CardBody>
				<div className="d-flex">
					<img alt={name} src={flag} className="figure-img float-left " width={60} height={40}/>
					<div className="float-right ml-3">
						<h3 className="text-info"> {name} </h3>
						<span> {capital}</span>
					</div>
				</div>
				<div className="">
					<span className="text-dark"> Population </span>
					<h1> {population}</h1>
				</div>
			</CardBody>
		</Card>
	</Col>
);

CountriesCard.propTypes = {
	name: PropTypes.string.isRequired,
	population: PropTypes.number.isRequired,
	index: PropTypes.number.isRequired,
	capital: PropTypes.string.isRequired,
	flag: PropTypes.string.isRequired,
	onModalOpenClicked: PropTypes.func.isRequired,
	onDeleteItemClicked: PropTypes.func.isRequired,
};

export default CountriesCard;
