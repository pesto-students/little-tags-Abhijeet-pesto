import { ReactElement } from 'react';
import './ProductDesc.css';
import { Slider } from '../ImageSlider/Slider';
import { Button, QuantityControl } from '../common';
import { FaShoppingCart } from 'react-icons/fa';

const images = [
	'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
	'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
	'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
	'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
];

export const ProductDesc = (): ReactElement => {
	return (
		<div className='product-desc-container'>
			<div className='product-image-slider'>
				<Slider slides={images} autoPlayInterval={4} />
			</div>
			<div className='product-details'>
				<div className='product-name'>
					<span>Faux Leather Jacket</span>
				</div>
				<div className='product-price'>
					<span>&#x20B9; {'1200'}</span>
				</div>
				<div className='product-desc'>
					<p>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
						dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
						clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
						consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
						sed diam voluptua.
					</p>
				</div>
				<div className='product-size'>
					<span className='title'>Size</span>
					<div className='sizes'>
						<span className='size'>XS</span>
						<span className='size'>S</span>
						<span className='size'>M</span>
						<span className='size'>L</span>
						<span className='size'>XL</span>
					</div>
				</div>
				<div className='product-quantity'>
					<span className='title'>Quantity</span>
					<div className='quantity'>
						<QuantityControl
							quantity={5}
							onInc={() => {
								console.log('inc');
							}}
							onDec={() => {
								console.log('dec');
							}}
						/>
					</div>
				</div>
				<div className='add-product'>
					<Button type='button' renderIcon={<FaShoppingCart />}>
						ADD TO CART
					</Button>
				</div>
			</div>
		</div>
	);
};
