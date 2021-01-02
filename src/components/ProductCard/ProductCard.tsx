import { ReactElement } from 'react';
import './ProductCard.css';
import { Image } from 'react-bootstrap';
import { CATEGORIES } from '../../utilities';

export interface Product {
	title: string;
	imgPath: string;
	imgAlt: string;
	category: CATEGORIES;
}

interface Props {
	product: Product;
	onCardClick: (product: Product) => void;
}

const ProductCard = ({ product, onCardClick }: Props): ReactElement => {
	return (
		<div className='product-card-container' onClick={() => onCardClick(product)}>
			<div className='product-card-bg'>
				<Image src={product.imgPath} alt={product.imgAlt} fluid />
			</div>
			<div className='product-card-desc-bg'></div>
			<div className='product-card-desc-text'>
				<span>{product.title}</span>
			</div>
		</div>
	);
};

export default ProductCard;
