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
const publicUrl = process.env.PUBLIC_URL;
const images = [publicUrl + '/1_1.jpg', publicUrl + '/1_2.jpg', publicUrl + '/1_3.jpg', publicUrl + '/1_4.jpg'];

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
