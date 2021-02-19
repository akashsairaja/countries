import React from 'react';
import { Switch, Route } from 'react-router-dom';

import WithRedux from '../WithRedux';
import WithOutRedux from '../WithoutRedux';

const Router = () => (
	<Switch>
		<Route path="/" exact component={WithRedux}/>
		<Route path="/with-redux" exact component={WithRedux}/>
		<Route path="/without-redux" exact component={WithOutRedux}/>
	</Switch>
);

export default Router;
