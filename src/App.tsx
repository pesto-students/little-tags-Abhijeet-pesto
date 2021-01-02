import { ReactElement, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, Cart, ViewAllCategory, Product, Orders, DeliverTo } from './routes';
import { Layout, ProtectedRoute, LoginModal } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getInventory } from './slices';
import { RootState } from './rootReducer';

function App(): ReactElement {
	const user = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();

	const { name: userName, isLoggedIn, showLoginModal } = user;

	useEffect(() => {
		dispatch(getInventory());
	}, [dispatch]);

	return (
		<div className='App'>
			<Router>
				<Layout userName={userName} isLoggedIn={isLoggedIn}>
					<Switch>
						<Route path='/login'>
							<span>Login</span>
						</Route>
						<Route path='/product/:productId'>
							<Product />
						</Route>
						<Route path='/viewall/:category'>
							<ViewAllCategory />
						</Route>
						<ProtectedRoute path='/orders' Component={Orders} isLoggedIn={isLoggedIn} />
						<ProtectedRoute path='/cart' Component={Cart} isLoggedIn={isLoggedIn} />
						<ProtectedRoute path='/deliverto' Component={DeliverTo} isLoggedIn={isLoggedIn} />
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
				</Layout>
			</Router>
			<LoginModal showModal={showLoginModal} />
		</div>
	);
}

export default App;
