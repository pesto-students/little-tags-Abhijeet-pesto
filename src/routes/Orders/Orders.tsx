import { ReactElement } from 'react';
import './Orders.css';
import { OrderCard } from '../../components';
import { useSelector } from 'react-redux';
import { RootState } from '../../rootReducer';
import { selectAllOrders } from '../../slices';

export const Orders = (): ReactElement => {
	const allOrders = useSelector((state: RootState) => selectAllOrders(state));
	const allProducts = allOrders.map((order) => Object.values(order.products.byId));
	console.log(allProducts);

	return (
		<div className='orders-container'>
			<div className='orders-title'>
				<span>Your Orders</span>
			</div>
			<div className='item-list-container'>
				<ul>
					{allOrders.map((order) => {
						const products = Object.values(order.products.byId);
						return products.map((item) => (
							<li key={order.id + item.id}>
								<OrderCard productName={item.name} price={item.price} productImg={item.imgUrl} orderDate={order.date} />
							</li>
						));
					})}
				</ul>
			</div>
		</div>
	);
};
