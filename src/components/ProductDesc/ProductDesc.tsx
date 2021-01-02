import { ReactElement } from 'react';
import './ProductDesc.css';
import { Slider } from '../ImageSlider/Slider';
import { Button, QuantityControl } from '../common';
import { FaShoppingCart } from 'react-icons/fa';
import classNames from 'classnames';

export enum SIZE {
	EXTRASMALL = 'XS',
	SMALL = 'S',
	MEDIUM = 'M',
	LARGE = 'L',
	EXTRALARGE = 'XL',
}

interface ProductDescProps {
	title: string;
	price: number;
	description: string;
	size: SIZE | null;
	quantity: number;
	showSizeSelector: boolean;
	onAddToCart: () => void;
	onQuantityChange: (newQuantity: number) => void;
	onSizeChange: (size: SIZE) => void;
}

const images = [
	'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
	'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
	'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
	'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
];

const getSizes = () => Object.values(SIZE);

export const ProductDesc = ({
	title,
	price,
	description,
	size,
	quantity,
	showSizeSelector,
	onAddToCart,
	onQuantityChange,
	onSizeChange,
}: ProductDescProps): ReactElement => {
	return (
		<div className='product-desc-container'>
			<div className='product-image-slider'>
				<Slider slides={images} autoPlayInterval={4} />
			</div>
			<div className='product-details'>
				<div className='product-name'>
					<span>{title}</span>
				</div>
				<div className='product-price'>
					<span>&#x20B9; {price}</span>
				</div>
				<div className='product-desc'>
					<p>{description}</p>
				</div>
				{showSizeSelector && (
					<div className='product-size'>
						<span className='title'>Size</span>
						<div className='sizes'>
							{getSizes().map((itemSize) => (
								<span
									key={itemSize}
									onClick={() => onSizeChange(itemSize)}
									className={classNames({
										size: true,
										selected: size === itemSize,
									})}
								>
									{itemSize}
								</span>
							))}
						</div>
					</div>
				)}
				<div className='product-quantity'>
					<span className='title'>Quantity</span>
					<div className='quantity'>
						<QuantityControl initialQuantity={quantity} onQuantityChange={onQuantityChange} />
					</div>
				</div>
				<div className='add-product'>
					<Button type='button' renderIcon={<FaShoppingCart />} onClick={onAddToCart}>
						ADD TO CART
					</Button>
				</div>
			</div>
		</div>
	);
};
