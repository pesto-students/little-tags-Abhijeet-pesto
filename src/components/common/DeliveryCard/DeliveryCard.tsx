import { ChangeEvent, ReactElement } from 'react';
import { RadioInput } from '../index';
import './DeliveryCard.css';

interface DeliveryCardProps {
	name: string;
	address?: string;
	value: string | number;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	radioButton?: boolean;
}
export const DeliveryCard = ({ name, value, onChange, radioButton = true }: DeliveryCardProps): ReactElement => {
	const label = (
		<>
			<div className='name'> Sagar Patel</div>
			<div className='address'>1418 Riverwood Drive, Suite 3245 Cottonwood, DL 110092, India </div>
			<div className='phone'>(+91) 9876 543 210</div>
		</>
	);

	return (
		<div className='delivery-card-container'>
			{radioButton ? <RadioInput onChange={onChange} name={name} value={value} label={label} /> : <div>{label}</div>}
		</div>
	);
};
