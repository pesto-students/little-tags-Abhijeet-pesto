import './SearchBar.css';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { MouseEvent, useState, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setInventoryFilter } from '../../../slices';

const SearchBar = (): JSX.Element => {
	const [search, setSearch] = useState('');
	const history = useHistory();
	const dispatch = useDispatch();

	const onSearchClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (search.length === 0) return;
		dispatch(
			setInventoryFilter({
				filter: {
					filterBy: 'searchQuery',
					filterValue: search,
				},
			}),
		);
		history.push(`/viewall`);
		setSearch('');
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (search.length === 0) return;
		if (event.key === 'Enter') {
			dispatch(
				setInventoryFilter({
					filter: {
						filterBy: 'searchQuery',
						filterValue: search,
					},
				}),
			);
			history.push(`/viewall`);
			setSearch('');
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
