import { ReactElement, useState, useEffect } from 'react';
import './ViewAllCategory.css';
import { CategoryCard, Pagination, Pager } from '../../components';
import { useParams } from 'react-router-dom';
import { CATEGORIES } from '../../utilities';
import { useSelector } from 'react-redux';
import { RootState } from '../../rootReducer';
import { selectItemsByCategory, InventoryItem } from '../../slices';

interface ParamType {
	category: CATEGORIES;
}

export const ViewAllCategory = (): ReactElement => {
	const { category } = useParams<ParamType>();
	const itemList = useSelector((state: RootState) => selectItemsByCategory(state, category));
	const [currentItems, setCurrentItems] = useState<Array<InventoryItem>>(() => {
		return itemList.length > 5 ? itemList.slice(0, 5) : itemList;
	});

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
				<span>All Shirts</span>
			</div>
			<div className='item-list-container'>
				<ul>
					{currentItems.map((item) => (
						<li key={item.id}>
							<CategoryCard
								productId={item.id}
								imgSrc={item.image}
								productName={item.title}
								productPrice={item.price}
							/>
						</li>
					))}
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
