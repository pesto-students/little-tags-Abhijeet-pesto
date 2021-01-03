import { ReactElement, useState, useEffect } from 'react';
import './ViewAllCategory.css';
import { CategoryCard, Pagination, Pager } from '../../components';
import { useParams } from 'react-router-dom';
import { CATEGORIES } from '../../utilities';
import { useSelector } from 'react-redux';
import { RootState } from '../../rootReducer';
import { selectItemsByCategory, InventoryItem, selectItemsBySearchQuery } from '../../slices';

interface ParamType {
	category: CATEGORIES;
	searchQuery: '';
}

export const ViewAllCategory = (): ReactElement => {
	const { category } = useParams<ParamType>();
	const { searchQuery } = useParams<ParamType>();
	const searchFlag = searchQuery === undefined ? false : true;
	const itemList = useSelector((state: RootState) => {
		if (searchFlag) {
			return selectItemsBySearchQuery(state, searchQuery);
		}
		return selectItemsByCategory(state, category);
	});
	console.log(itemList);
	const [currentItems, setCurrentItems] = useState<Array<InventoryItem>>(() => {
		return itemList.length > 5 ? itemList.slice(0, 5) : itemList;
	});

	useEffect(() => {
		setCurrentItems(itemList.length > 5 ? itemList.slice(0, 5) : itemList);
	}, [searchQuery]);

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
				{searchFlag ? <span>Search Results for {searchQuery.toUpperCase()}</span> : <span>All {category}</span>}
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
