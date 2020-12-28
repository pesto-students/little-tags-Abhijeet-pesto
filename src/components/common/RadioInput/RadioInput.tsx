import { ReactElement, ChangeEvent } from 'react';
import './RadioInput.css';

interface RadioInputProps {
	name: string;
	label: string;
	value: string | number;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioInput = ({ name, label, value, onChange }: RadioInputProps): ReactElement => {
	return (
		<label className='radio'>
			<span className='radio-input'>
				<input type='radio' name={name} onChange={onChange} value={value} />
				<span className='radio-control'></span>
			</span>
			<span className='radio-label'>{label}</span>
		</label>
	);
};
