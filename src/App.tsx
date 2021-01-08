import { ReactElement, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout, ProtectedRoute, LoginModal, Toast } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getInventory } from './slices';
import { RootState } from './rootReducer';
import {
	Home,
	Cart,
	ViewAllCategory,
	Product,
	Orders,
	DeliverTo,
	AddAddress,
	LoginPage,
	PaymentPage,
	ThankYou,
} from './routes';

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
						<Route path='/product/:productId'>
							<Product />
						</Route>
						<Route path='/viewall'>
							<ViewAllCategory />
						</Route>
						<Route path='/login'>
							<LoginPage />
						</Route>
						<Route path='/thanks'>
							<ThankYou />
						</Route>
						<ProtectedRoute path='/orders' Component={Orders} isLoggedIn={isLoggedIn} />
						<ProtectedRoute path='/cart' Component={Cart} isLoggedIn={isLoggedIn} />
						<ProtectedRoute path='/deliverto' Component={DeliverTo} isLoggedIn={isLoggedIn} />
						<ProtectedRoute path='/Addaddress' Component={AddAddress} isLoggedIn={isLoggedIn} />
						<ProtectedRoute path='/payment' Component={PaymentPage} isLoggedIn={isLoggedIn} />
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
				</Layout>
			</Router>
			<LoginModal showModal={showLoginModal} />
			<Toast />
		</div>
	);
}

export default App;
