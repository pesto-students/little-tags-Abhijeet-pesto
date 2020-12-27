import { ReactElement } from 'react';
import './Cart.css';
import { CartItemCard, Layout, Button } from '../../components';

export const Cart = (): ReactElement => {
	return (
		<Layout isLoggedIn={false} userName={''} itemsInCart={0} theme='dark'>
			<div className='cart-container'>
				<div className='cart-title'>
					<span>Your Cart</span>
				</div>
				<div className='item-list-container'>
					<ul>
						{/* {currentItems.map((item) => ( ////// implement looop
							<li key={item.id}>
								<CategoryCard imgSrc={item.image} productName={item.title} productPrice={item.price} />
							</li>
						))} */}
						<li>
							<CartItemCard />
						</li>
						<li>
							<CartItemCard />
						</li>
					</ul>
				</div>
				{/* {itemList.length > 0 && (   ///////////////  code for pagination
					<div className='pagination-controls'>
						<Pagination totalItems={itemList.length} onPageChange={onPgaeChange} />
					</div>
				)} */}
				<div className='proceed-btn'>
					<Button type='button'>Proceed</Button>
				</div>
			</div>
		</Layout>
	);
};
