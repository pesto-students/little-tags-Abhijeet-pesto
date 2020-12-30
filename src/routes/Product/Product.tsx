import { ReactElement } from 'react';
import './Product.css';
import { ProductDesc } from '../../components';

export const Product = (): ReactElement => {
	return (
		<div className='product-page-container'>
			<div className='product-container'>
				<ProductDesc />
			</div>
		</div>
	);
};
