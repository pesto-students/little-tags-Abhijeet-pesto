import { ReactElement } from 'react';
import './OrderCard.css';
import { Button } from '../common';
import { ProductThumbnail } from '../ProductThumbnail/ProductThumbnail';

interface OrderCardProps {
	productName: string;
	price: number;
	orderDate: string;
	productImg: string;
}

export const OrderCard = ({ productName, price, orderDate, productImg }: OrderCardProps): ReactElement => {
	return (
		<div className='order-card'>
			<div className='order-image'>
				<ProductThumbnail src={productImg} alt={'alt'} />
			</div>
			<div className='order-details'>
				<div className='order-name'>
					<span>{productName}</span>
				</div>
				<div className='order-price'>
					<span>&#x20B9; {price}</span>
				</div>
				<div className='order-date'>
					<span>{orderDate}</span>
				</div>
			</div>
			<div className='reorder'>
				<Button type='button'>ORDER AGAIN</Button>
			</div>
		</div>
	);
};
