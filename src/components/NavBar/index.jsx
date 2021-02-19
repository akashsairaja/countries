import React from 'react';
import PropTypes from 'prop-types';
import {
	FormGroup,
	Navbar,
	NavbarBrand,
	Form,
	Input,
	NavItem, NavLink, Nav,
} from 'reactstrap';

const TopBar = ({ onChange }) => (
	<Navbar light expand="md" className="bg-white border border-light">
		<NavbarBrand href="/">
			<img alt="logo" width={80} height={60}
				 src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
				 className="img-thumbnail"/>
		</NavbarBrand>
		<Nav className="mr-auto" navbar>
			<NavItem>
				<NavLink href="/with-redux">
					With Redux
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/without-redux">
					With Out Redux
				</NavLink>
			</NavItem>
		</Nav>
		<Form className="w-100">
			<FormGroup className="topbar__has-search">
				<i className="bi bi-search form-control-feedback"/>
				<Input type="text" placeholder="Search..." onChange={({ target: { value } }) => onChange(value)}/>
			</FormGroup>
		</Form>
	</Navbar>
);

TopBar.propTypes = {
	onChange: PropTypes.func.isRequired,
};

export default React.memo(TopBar);
