import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header/Header';

function App(): JSX.Element {
  return <div className='App'>{<Header userName='' isLoggedIn={false} itemsInCart={1} theme='white' />}</div>;
}

export default App;
