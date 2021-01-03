import './SearchBar.css';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { MouseEvent, useState, KeyboardEvent } from 'react';

const SearchBar = (): JSX.Element => {
	const [search, setSearch] = useState('');
	const history = useHistory();
	const onSearchClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		history.push(`/viewall/search/${search}`);
	};
	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			history.push(`/viewall/search/${search}`);
		}
	};

	return (
		<InputGroup>
			<InputGroup.Prepend className='search-icon-container'>
				<Button variant='outline-secondary' className='search-icon-btn' onClick={onSearchClick}>
					<BsSearch />
				</Button>
			</InputGroup.Prepend>
			<FormControl
				value={search}
				placeholder='search'
				className='search-input'
				onChange={(e) => {
					setSearch(e.target.value);
				}}
				onKeyDown={handleKeyDown}
			/>
		</InputGroup>
	);
};

export default SearchBar;
