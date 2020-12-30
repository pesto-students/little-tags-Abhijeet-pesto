import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Header } from './components/Header/Header';
import { ViewAllCategory } from './routes';
import { Layout } from './components';

function App(): JSX.Element {
	return (
		<div className='App'>
			<Layout isLoggedIn={false} userName={''} itemsInCart={0} theme='dark'>
				<ViewAllCategory />
			</Layout>
		</div>
	);
}

export default App;
