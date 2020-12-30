import React, { ReactElement } from 'react';
import { DeliveryCard, RadioInput } from '../../components/common/index';
import './PaymentPage.css';

export const PaymentPage = (): ReactElement => {
	return (
		<div className='payment-container'>
			<div className='header'>
				Delivering To
				<DeliveryCard
					onChange={() => undefined}
					name='Add'
					value='Address'
					label={
						<div>
							<div className='name'> Sagar Patel</div>
							<div className='address'>1418 Riverwood Drive, Suite 3245 Cottonwood, DL 110092, India </div>
						</div>
					}
					radioButton={false}
				/>
				<div className='header'>Method of Payment</div>
				<div className='payment-options'>
					<RadioInput
						onChange={() => undefined}
						name='Payment'
						value='Payment'
						label={<div className='payment-padding'> RazorPay</div>}
					/>
					<RadioInput
						onChange={() => undefined}
						name='Payment'
						value='Payment'
						label={<div className='payment-padding'> Visa / Mastercard / UPI</div>}
					/>
					<RadioInput
						onChange={() => undefined}
						name='Payment'
						value='Payment'
						label={<div className='payment-padding'> Pay Pal</div>}
					/>
				</div>
				<div className='proccedBtnPadding'>
					<button className='proccedButton'>Proceed to payment</button>
				</div>
			</div>
		</div>
	);
};
