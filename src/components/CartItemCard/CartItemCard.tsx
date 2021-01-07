import { ReactElement } from 'react';
import './CartItemCard.css';
import { ProductThumbnail } from '../ProductThumbnail/ProductThumbnail';
import { QuantityControl } from '../common';
import { CartItem } from '../../slices';

interface CartItemCardProps {
	item: CartItem;
	onItemQuantityChange: (id: number, quantity: number) => void;
}

export const CartItemCard = ({ item, onItemQuantityChange }: CartItemCardProps): ReactElement => {
	const { id, name, price, imgUrl, quantity: itemQuantity } = item;

	const onQuantityChange = (quantity: number) => {
		onItemQuantityChange(id, quantity);
	};

	return (
		<div className='cart-item-container'>
			<div className='item-image'>
				<ProductThumbnail src={imgUrl} alt={name} />
			</div>
			<div className='item-details-container'>
				<div className='item-details'>
					<div className='item-name'>
						<span>{name}</span>
					</div>
					<div className='item-price'>
						<span>&#x20B9; {price}</span>
					</div>
				</div>
				<div className='item-quantity'>
					<QuantityControl initialQuantity={itemQuantity} onQuantityChange={onQuantityChange} />
				</div>
			</div>
		</div>
	);
};
