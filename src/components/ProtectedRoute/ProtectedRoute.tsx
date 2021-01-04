import { ComponentType, ReactElement } from 'react';
import { Route } from 'react-router-dom';
import { LoginPage } from '../../routes';

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
		<Route>
			<LoginPage />
		</Route>
	);
};
