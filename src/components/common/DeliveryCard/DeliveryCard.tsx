import { ChangeEvent, ReactElement } from 'react';
import { RadioInput } from '../index';
import './DeliveryCard.css';

interface DeliveryCardProps {
	name: string;
	label: ReactElement;
	value: string | number;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	radioButton?: boolean;
}
export const DeliveryCard = ({ name, label, value, onChange, radioButton = true }: DeliveryCardProps): ReactElement => {
	return (
		<div className='delivery-container'>
			{radioButton ? <RadioInput onChange={onChange} name={name} value={value} label={label} /> : <div>{label}</div>}
		</div>
	);
};
