import { ReactElement, useState, ChangeEvent } from 'react';
import { DeliveryCard, RadioInput, Button } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../rootReducer';
import { useHistory } from 'react-router-dom';
import { getDateString } from '../../utilities';
import { v4 as uniqueId } from 'uuid';
import {
	selectAddressById,
	Address,
	selectAllCartItems,
	ProductsEntity,
	CartItem,
	Order,
	addOrder,
	emptyCart,
	NewToastParams,
	addNewToast,
} from '../../slices';
import './PaymentPage.css';

export const PaymentPage = (): ReactElement => {
	const [paymentOption, setPaymentOption] = useState('razor');

	const dispatch = useDispatch();
	const history = useHistory();

	const cartItems = useSelector((state: RootState) => selectAllCartItems(state));
	const deliveryAddress = useSelector((state: RootState) =>
		selectAddressById(state, state.address.selectedAddressId),
	) as Address;

	const onPaymentOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPaymentOption(event.target.value);
	};

	const onProceedBtnClick = () => {
		const products: ProductsEntity = {
			allIds: cartItems.map((item) => item.id),
			byId: cartItems.reduce((result: { [key: number]: CartItem }, item) => {
				result[item.id] = item;
				return result;
			}, {}),
		};
		const order: Order = {
			id: uniqueId(),
			date: getDateString(),
			products,
			addressId: deliveryAddress.id,
		};
		const message: NewToastParams = {
			title: 'success',
			message: 'Order placed.',
		};
		dispatch(addOrder(order));
		dispatch(emptyCart());
		dispatch(addNewToast(message));
		history.push('/thanks');
	};

	return (
		<div className='payment-container'>
			<div className='heading'>Delivering To</div>
			<DeliveryCard address={deliveryAddress} showRadioBtn={false} />
			<div className='heading'>Method of Payment</div>
			<div className='payment-options'>
				<RadioInput
					onChange={onPaymentOptionChange}
					name='payment-radio'
					value='razor'
					checked={paymentOption === 'razor'}
					label={<span className='payment-option-label'>RazorPay</span>}
				/>
				<RadioInput
					onChange={onPaymentOptionChange}
					name='payment-radio'
					value='visa'
					checked={paymentOption === 'visa'}
					label={<span className='payment-option-label'>Visa / Mastercard / UPI</span>}
				/>
				<RadioInput
					onChange={onPaymentOptionChange}
					name='payment-radio'
					value='paypal'
					checked={paymentOption === 'paypal'}
					label={<span className='payment-option-label'>Pay Pal</span>}
				/>
			</div>
			<div className='proceed-btn-container'>
				<Button type='button' onClick={onProceedBtnClick}>
					PROCEED TO PAYMENT
				</Button>
			</div>
		</div>
	);
};
