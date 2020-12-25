import { ReactElement } from 'react';
import './ProductCard.css';
import { Image } from 'react-bootstrap';

interface Props {
	product: {
		title: string;
		imgPath: string;
		imgAlt: string;
	};
}

const ProductCard = ({ product }: Props): ReactElement => {
	return (
		<div className='product-card-container'>
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
