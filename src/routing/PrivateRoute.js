import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const privateRoute = ({ component, ...rest }) => {
	const isLogged = !!localStorage.getItem('userID');
	return (
		<Route
			{...rest}
			render={(props) =>
				isLogged ? <div>{React.createElement(component, props)}</div> : <Redirect to="/login" exact />}
		/>
	);
};

export default privateRoute;
