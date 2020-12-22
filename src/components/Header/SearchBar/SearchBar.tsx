import './SearchBar.css';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

const SearchBar = (): JSX.Element => {
	return (
		<InputGroup>
			<InputGroup.Prepend className='search-icon-container'>
				<Button variant='outline-secondary' className='search-icon-btn'>
					<BsSearch />
				</Button>
			</InputGroup.Prepend>
			<FormControl placeholder='search' className='search-input' />
		</InputGroup>
	);
};

export default SearchBar;
