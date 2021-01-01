import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, Cart, ViewAllCategory, Product, Orders } from './routes';
import { Layout, ProtectedRoute } from './components';
// import { Modal } from './components/common';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App(): JSX.Element {
	return (
		<div className='App'>
			<Router>
				<Layout isLoggedIn={false} userName={''} itemsInCart={0} theme='dark'>
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
		</div>
	);
}

export default App;
