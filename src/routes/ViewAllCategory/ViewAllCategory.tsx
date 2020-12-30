import { ReactElement, useState, useEffect } from 'react';
import './ViewAllCategory.css';
import { CategoryCard, Pagination, Pager } from '../../components';

interface ProductDetail {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
}

// type ViewAllCategoryProps = {
// 	allItems: ProductDetail[];
// };

export const ViewAllCategory = (): ReactElement => {
	const [currentItems, setCurrentItems] = useState<Array<ProductDetail>>([]);

	const [itemList, setItemList] = useState<Array<ProductDetail>>([]);
	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((items) => {
				setItemList(items);
				if (items.length > 5) {
					setCurrentItems(items.slice(0, 5));
				} else {
					setCurrentItems(items);
				}
			});
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
							<CategoryCard imgSrc={item.image} productName={item.title} productPrice={item.price} />
						</li>
					))}
				</ul>
			</div>
			{itemList.length > 0 && (
				<div className='pagination-controls'>
					<Pagination totalItems={itemList.length} onPageChange={onPgaeChange} />
				</div>
			)}
		</div>
	);
};
