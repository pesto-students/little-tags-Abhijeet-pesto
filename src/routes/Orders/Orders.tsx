import { ReactElement } from 'react';
import './Orders.css';
import { OrderCard } from '../../components';

export const Orders = (): ReactElement => {
	return (
		<div className='orders-container'>
			<div className='orders-title'>
				<span>Your Orders</span>
			</div>
			<div className='item-list-container'>
				<ul>
					{/* {currentItems.map((item) => ( ////// implement looop
							<li key={item.id}>
								<CategoryCard imgSrc={item.image} productName={item.title} productPrice={item.price} />
							</li>
						))} */}
					<li>
						<OrderCard />
					</li>
					<li>
						<OrderCard />
					</li>
				</ul>
			</div>
		</div>
	);
};
