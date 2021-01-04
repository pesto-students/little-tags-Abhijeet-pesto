import { ChangeEvent, ReactElement } from 'react';
import { RadioInput } from '../index';
import './DeliveryCard.css';
import { Address } from '../../../slices';

interface DeliveryCardProps {
	address: Address;
	selected: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	radioButton?: boolean;
}
export const DeliveryCard = ({ address, selected, onChange, radioButton = true }: DeliveryCardProps): ReactElement => {
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
			{radioButton ? (
				<RadioInput onChange={onChange} name='address-radio' value={id} label={label} checked={selected} />
			) : (
				<div>{label}</div>
			)}
		</div>
	);
};
