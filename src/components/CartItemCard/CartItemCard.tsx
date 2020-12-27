import { ReactElement } from 'react';
import './CartItemCard.css';
import { ProductThumbnail } from '../ProductThumbnail/ProductThumbnail';
import { QuantityControl } from '../common';

export const CartItemCard = (): ReactElement => {
	return (
		<div className='cart-item-container'>
			<div className='item-image'>
				<ProductThumbnail src={'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'} alt={'alt'} />
			</div>
			<div className='item-details-container'>
				<div className='item-details'>
					<div className='item-name'>
						<span>{'Faux Leather Jacket'}</span>
					</div>
					<div className='item-price'>
						<span>&#x20B9; {'1200'}</span>
					</div>
				</div>
				<div className='item-quantity'>
					<QuantityControl quantity={5} onInc={() => null} onDec={() => null} />
				</div>
			</div>
		</div>
	);
};
