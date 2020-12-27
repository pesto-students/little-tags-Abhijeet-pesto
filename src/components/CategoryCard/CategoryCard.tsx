import { ReactElement } from 'react';
import './CategoryCard.css';
import { ProductThumbnail } from '../ProductThumbnail/ProductThumbnail';

export interface CategoryCardProps {
	imgSrc: string;
	imgAlt?: string;
	productName: string;
	productPrice: number;
}

export const CategoryCard = ({
	imgSrc,
	productName,
	productPrice,
	imgAlt = 'image',
}: CategoryCardProps): ReactElement => {
	return (
		<div className='category-card-container'>
			<div className='product-image'>
				<ProductThumbnail src={imgSrc} alt={imgAlt} />
			</div>
			<div className='product-name'>
				<span>{productName}</span>
			</div>
			<div className='product-price'>
				<span>&#x20B9; {productPrice}</span>
			</div>
		</div>
	);
};
