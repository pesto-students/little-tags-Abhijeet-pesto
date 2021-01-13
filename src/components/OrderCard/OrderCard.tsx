import { ReactElement, useState } from 'react';
import './OrderCard.css';
import { Button } from '../common';
import { ProductThumbnail } from '../ProductThumbnail/ProductThumbnail';
import { useDispatch } from 'react-redux';
import { CartItem, NewToastParams, addToCart, addNewToast } from '../../slices';

interface OrderCardProps {
	product: CartItem;
	orderDate: string;
}

export const OrderCard = ({ product, orderDate }: OrderCardProps): ReactElement => {
	const [orderedAgain, setOrderedAgain] = useState(false);
	const dispatch = useDispatch();
	const { name, price, imgUrl, quantity } = product;

	const onOrderAgainClick = () => {
		const message: NewToastParams = {
			title: 'info',
			message: 'Product added to cart.',
		};
		dispatch(addToCart(product));
		dispatch(addNewToast(message));
		setOrderedAgain(true);
	};

	return (
		<div className='order-card'>
			<div className='order-image'>
				<ProductThumbnail src={imgUrl} alt={'alt'} />
			</div>
			<div className='order-details'>
				<div className='order-name'>
					<span>{name}</span>
				</div>
				<div className='order-price'>
					<span>&#x20B9; {(price * quantity).toFixed(2)}</span>
				</div>
				<div className='order-date'>
					<span>{orderDate}</span>
				</div>
			</div>
			<div className='reorder'>
				{!orderedAgain && (
					<Button type='button' onClick={onOrderAgainClick}>
						ORDER AGAIN
					</Button>
				)}
			</div>
		</div>
	);
};
