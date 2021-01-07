import { ReactElement, useState, useEffect } from 'react';
import './ViewAllCategory.css';
import { CategoryCard, Pagination, Pager } from '../../components';
import { useSelector } from 'react-redux';
import { RootState } from '../../rootReducer';
import { InventoryItem, selectFilteredItems } from '../../slices';

export const ViewAllCategory = (): ReactElement => {
	const itemList = useSelector((state: RootState) => selectFilteredItems(state));
	const { filterBy, filterValue } = useSelector((state: RootState) => state.inventory.filter);

	const [currentItems, setCurrentItems] = useState<Array<InventoryItem>>(() => {
		return itemList.length > 5 ? itemList.slice(0, 5) : itemList;
	});

	console.log(itemList);

	useEffect(() => {
		setCurrentItems(itemList.length > 5 ? itemList.slice(0, 5) : itemList);
	}, [itemList]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const onPgaeChange = (pager: Pager) => {
		const { currentStartIndex, currentEndIndex } = pager;
		if (currentEndIndex >= itemList.length) {
			setCurrentItems(itemList.slice(currentStartIndex));
		} else {
			setCurrentItems(itemList.slice(currentStartIndex, currentEndIndex));
		}
		// window.scrollTo(0, 0);
	};

	return (
		<div className='view-all-container'>
			<div className='category-title'>
				{filterBy === 'searchQuery' ? (
					<span>Search Results for {filterValue.toUpperCase()}</span>
				) : (
					<span>All {filterValue}</span>
				)}
			</div>
			<div className='item-list-container'>
				<ul>
					{currentItems.length === 0 ? (
						<span className='no-results'>No Results Found</span>
					) : (
						currentItems.map((item) => (
							<li key={item.id}>
								<CategoryCard
									productId={item.id}
									imgSrc={item.image}
									productName={item.title}
									productPrice={item.price}
								/>
							</li>
						))
					)}
				</ul>
			</div>
			{itemList.length > 5 && (
				<div className='pagination-controls'>
					<Pagination totalItems={itemList.length} onPageChange={onPgaeChange} />
				</div>
			)}
		</div>
	);
};
