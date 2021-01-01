import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, Cart, ViewAllCategory, Product, Orders } from './routes';
import { Layout, ProtectedRoute, LoginModal } from './components';
import { useSelector } from 'react-redux';
import { RootState } from './rootReducer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App(): JSX.Element {
	const user = useSelector((state: RootState) => state.user);

	return (
		<div className='App'>
			<Router>
				<Layout isLoggedIn={user.isLoggedIn} userName={user.name} itemsInCart={0} theme='dark'>
					<Switch>
						<Route path='/login'>
							<span>Login</span>
						</Route>
						<Route path='/product'>
							<Product />
						</Route>
						<Route path='/viewAll'>
							<ViewAllCategory />
						</Route>
						<ProtectedRoute path='/orders' Component={Orders} isLoggedIn={false} />
						<ProtectedRoute path='/cart' Component={Cart} isLoggedIn={false} />
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
				</Layout>
			</Router>
			<LoginModal showModal={user.showLoginModal} />
		</div>
	);
}

export default App;
