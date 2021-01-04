import { ReactElement, ChangeEvent } from 'react';
import './RadioInput.css';

interface RadioInputProps {
	name: string;
	label: ReactElement;
	value: string | number;
	checked: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioInput = ({ name, label, value, checked, onChange }: RadioInputProps): ReactElement => {
	return (
		<label className='radio'>
			<span className='radio-input'>
				<input type='radio' name={name} onChange={onChange} value={value} checked={checked} />
				<span className='radio-control'></span>
			</span>
			<div className='radio-label'>{label}</div>
		</label>
	);
};
