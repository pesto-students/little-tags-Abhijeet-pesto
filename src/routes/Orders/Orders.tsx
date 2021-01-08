import { ReactElement } from 'react';
import './Orders.css';
import { OrderCard, NoItems } from '../../components';
import { useSelector } from 'react-redux';
import { RootState } from '../../rootReducer';
import { selectAllOrders } from '../../slices';
import classNames from 'classnames';

export const Orders = (): ReactElement => {
	const allOrders = useSelector((state: RootState) => selectAllOrders(state));
	// const allProducts = allOrders.map((order) => Object.values(order.products.byId));

	return (
		<div
			className={classNames({
				'orders-container': true,
				'height-ex-footer': allOrders.length === 0,
			})}
		>
			<div className='orders-title'>
				<span>Your Orders</span>
			</div>
			{allOrders.length > 0 ? (
				<div className='item-list-container'>
					<ul>
						{allOrders.map((order) => {
							const products = Object.values(order.products.byId);
							return products.map((item) => (
								<li key={order.id + item.id}>
									<OrderCard product={item} orderDate={order.date} />
								</li>
							));
						})}
					</ul>
				</div>
			) : (
				<NoItems message={`You haven't placed an order yet!`} />
			)}
		</div>
	);
};
