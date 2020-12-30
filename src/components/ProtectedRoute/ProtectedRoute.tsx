import { ComponentType, ReactElement } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface ProtectedRouteProps {
	Component: ComponentType;
	isLoggedIn: boolean;
	path: string;
}

export const ProtectedRoute = ({ Component, isLoggedIn, path }: ProtectedRouteProps): ReactElement => {
	return isLoggedIn ? (
		<Route path={path}>
			<Component />
		</Route>
	) : (
		<Redirect to={{ pathname: '/login' }} />
	);
};
