import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, Cart, ViewAllCategory, Product, Orders } from './routes';
import { Layout, ProtectedRoute } from './components';
// import { Modal } from './components/common';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App(): JSX.Element {
	return (
		<div className='App'>
			<Layout isLoggedIn={false} userName={''} itemsInCart={0} theme='dark'>
				<Router>
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
						<ProtectedRoute path='/cart' Component={Orders} isLoggedIn={false} />
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
				</Router>
			</Layout>
		</div>
	);
}

export default App;
