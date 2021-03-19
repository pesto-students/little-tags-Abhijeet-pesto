import { ChangeEvent, ReactElement } from 'react';
import { RadioInput } from '../index';
import './DeliveryCard.css';
import { Address } from '../../../slices';

const defaultProps = {
	showRadioBtn: true,
	selected: false,
};

type DeliveryCardProps = {
	address: Address;
	showRadioBtn: boolean;
	selected: boolean;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
} & typeof defaultProps;

export const DeliveryCard = ({ address, selected, showRadioBtn, onChange }: DeliveryCardProps): ReactElement => {
	const { id, firstName, lastName, mainAddress, subAddress, state: addressState, pinCode, phone } = address;

	const label = (
		<>
			<div className='name'>
				{firstName} {lastName}
			</div>
			<div className='main-address'>{mainAddress}</div>
			<div className='sub-address'>{subAddress}</div>
			<div className='address-state'>
				{addressState}, India - {pinCode}
			</div>
			<div className='phone'>(+91) {phone}</div>
		</>
	);

	return (
		<div className='delivery-card-container'>
			{showRadioBtn && onChange ? (
				<RadioInput onChange={onChange} name='address-radio' value={id} label={label} checked={selected} />
			) : (
				<div>{label}</div>
			)}
		</div>
	);
};

DeliveryCard.defaultProps = defaultProps;
