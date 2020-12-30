import { ReactElement } from 'react';
import './OrderCard.css';
import { Button } from '../common';
import { ProductThumbnail } from '../ProductThumbnail/ProductThumbnail';

export const OrderCard = (): ReactElement => {
	return (
		<div className='order-card'>
			<div className='order-image'>
				<ProductThumbnail src={'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'} alt={'alt'} />
			</div>
			<div className='order-details'>
				<div className='order-name'>
					<span>{'Faux Leather Jacket'}</span>
				</div>
				<div className='order-price'>
					<span>&#x20B9; {'1200'}</span>
				</div>
				<div className='order-date'>
					<span>2 September 2020</span>
				</div>
			</div>
			<div className='reorder'>
				<Button type='button'>ORDER AGAIN</Button>
			</div>
		</div>
	);
};
