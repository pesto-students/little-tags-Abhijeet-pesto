import { ReactElement, useState } from 'react';
import './Cart.css';
import { CartItemCard, Button, Pagination, Pager } from '../../components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../rootReducer';
import { selectAllCartItems, modifyItem, CartItem } from '../../slices';

export const Cart = (): ReactElement => {
	const itemsInCart = useSelector((state: RootState) => selectAllCartItems(state));
	const [currentItems, setCurrentItems] = useState<Array<CartItem>>(() => {
		return itemsInCart.length > 5 ? itemsInCart.slice(0, 5) : itemsInCart;
	});
	const dispatch = useDispatch();
	const history = useHistory();

	const onPageChange = (pager: Pager) => {
		const { currentStartIndex, currentEndIndex } = pager;
		if (currentEndIndex >= itemsInCart.length) {
			setCurrentItems(itemsInCart.slice(currentStartIndex));
		} else {
			setCurrentItems(itemsInCart.slice(currentStartIndex, currentEndIndex));
		}
	};

	const onItemQuantityChange = (id: number, quantity: number) => {
		dispatch(modifyItem({ id, changes: { quantity } }));
	};

	return (
		<div className='cart-container'>
			<div className='cart-title'>
				<span>Your Cart</span>
			</div>
			<div className='item-list-container'>
				<ul>
					{currentItems.map((item) => (
						<li key={item.id}>
							<CartItemCard item={item} onItemQuantityChange={onItemQuantityChange} />
						</li>
					))}
				</ul>
			</div>
			{itemsInCart.length > 5 && ( ///////////////  code for pagination
				<div className='pagination-controls'>
					<Pagination totalItems={itemsInCart.length} onPageChange={onPageChange} />
				</div>
			)}
			<div className='proceed-btn'>
				<Button type='button' onClick={() => history.push('/deliverto')}>
					Proceed
				</Button>
			</div>
		</div>
	);
};
