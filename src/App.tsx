import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, Cart, ViewAllCategory, Product, Orders } from './routes';
import { Layout } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App(): JSX.Element {
	return (
		<div className='App'>
			<Layout isLoggedIn={false} userName={''} itemsInCart={0} theme='dark'>
				<Router>
					<Switch>
						<Route path='/orders'>
							<Orders />
						</Route>
						<Route path='/cart'>
							<Cart />
						</Route>
						<Route path='/product'>
							<Product />
						</Route>
						<Route path='/viewAll'>
							<ViewAllCategory />
						</Route>
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
