import React from 'react';
import {
	Row, Container, Col, CardTitle,
	Modal, ModalHeader, ModalBody, CardBody, Card, CardHeader,
} from 'reactstrap';

import CountriesCard from '../../components/CountriesCard';
import Topbar from '../../components/NavBar';

import { getRestCountries } from '../../utils';

import countriesHook from '../../hooks';

const WithoutRedux = () => {

	const [state, updateState, onModalOpenClicked, closeModal, onDeleteItemClicked, onSearchChange] = countriesHook();

	const { filteredCountries, isModalOpen, countries, searchKey, selectedViewValues } = state;

	React.useEffect(() => {
		getRestCountries().then(data => updateState({
			...state,
			countries: data,
			filteredCountries: data,
		}));
	}, []);

	return (
		<Container fluid className="px-0">
			<Topbar onChange={onSearchChange}/>
			<div className="container-fluid">
				<Row className="overflow-hidden">
					<Col xl={12} sm={12} md={12}> Showing {filteredCountries.length} Countries </Col>
					{
						filteredCountries.map(
							({ name, population, capital, flag }, index) =>
								<CountriesCard
									key={index}
									name={name}
									population={population}
									capital={capital}
									flag={flag}
									index={index}
									onDeleteItemClicked={onDeleteItemClicked}
									onModalOpenClicked={onModalOpenClicked}
								/>,
						)
					}
					{
						(searchKey.length !== 0 && filteredCountries.length === 0)
						&& <Col xl={12} sm={12} md={12} className="d-flex justify-content-center alert alert-info mt-3">
							No Countries
						</Col>
					}
				</Row>
			</div>
			{
				isModalOpen && (
					<Modal isOpen={isModalOpen} toggle={() => closeModal()} size="lg">
						<ModalHeader toggle={() => closeModal()}>
							<span className="text-primary mx-4">
									{selectedViewValues.name}
							</span>
							<span className="d-inline">
								{selectedViewValues.timezones.join(',')}
							</span>
							<span className="mx-2">
								(
									lat, long : <span
								className="text-primary float-right"> {selectedViewValues.latlng.join(',')}</span>
								)
							</span>

						</ModalHeader>
						<ModalBody>
							<Card>
								<CardTitle className="d-flex justify-content-center">
									<b className="px-1"> Region : </b> {selectedViewValues.region} | <b
									className="px-1"> Sub Region
									:</b> {selectedViewValues.subregion} |
									<b className="px-1"> Population :</b> {selectedViewValues.population}
								</CardTitle>
								<CardBody>
									<div className="d-flex">
										<img alt={selectedViewValues.name}
											 src={selectedViewValues.flag} className="figure-img float-left " width={60}
											 height={40}/>
										<div className="float-right ml-3">
											<h3 className="text-info"> {selectedViewValues.name} </h3>
											<span> {selectedViewValues.capital}</span>
										</div>
									</div>
								</CardBody>
							</Card>
							<hr/>
							<Card className="px-0 mx-0">
								<CardHeader>
									Currencies Values
								</CardHeader>
								<CardBody className="px-0" style={{ maxHeight: 300, overflowY: 'scroll' }}>
									<table className="table table-striped table-bordered">
										<thead>
										<tr>
											<th>#</th>
											<th>Code Name</th>
											<th>Name</th>
											<th>Symbol</th>
										</tr>
										</thead>
										<tbody>
										{
											selectedViewValues.currencies.map(({ code, name, symbol }, index) => (
												<tr key={index}>
													<th scope="row"> {index + 1} </th>
													<td> {code} </td>
													<td> {name} </td>
													<td> {symbol} </td>
												</tr>
											))
										}
										</tbody>
									</table>
								</CardBody>
							</Card>
							<hr/>


							<div className="col-md-12">
							<span>
								<b>  Language Translations : </b>
								{
									Object.values(selectedViewValues.translations).join(',')
								}</span>
							</div>
						</ModalBody>
					</Modal>
				)
			}
		</Container>
	);
};


export default WithoutRedux;
