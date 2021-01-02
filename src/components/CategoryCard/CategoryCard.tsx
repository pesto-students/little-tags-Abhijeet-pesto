import { ReactElement } from 'react';
import './CategoryCard.css';
import { ProductThumbnail } from '../ProductThumbnail/ProductThumbnail';
import { useHistory } from 'react-router-dom';

export interface CategoryCardProps {
	productId: number;
	imgSrc: string;
	imgAlt?: string;
	productName: string;
	productPrice: number;
}

export const CategoryCard = ({
	productId,
	imgSrc,
	productName,
	productPrice,
	imgAlt = 'image',
}: CategoryCardProps): ReactElement => {
	const history = useHistory();

	const handleClick = () => {
		history.push(`/product/${productId}`);
	};

	return (
		<div className='category-card-container' onClick={handleClick}>
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
