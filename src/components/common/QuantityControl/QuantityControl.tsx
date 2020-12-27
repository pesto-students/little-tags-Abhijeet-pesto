import { ReactElement, MouseEvent } from 'react';
import './QuantityControl.css';
// import { FiPlus, FiMinus } from 'react-icons/fi';

interface QuantityControlProps {
	quantity: number;
	onInc: (event?: MouseEvent<HTMLButtonElement>) => void;
	onDec: (event?: MouseEvent<HTMLButtonElement>) => void;
}

export const QuantityControl = ({ quantity, onInc, onDec }: QuantityControlProps): ReactElement => {
	return (
		<div className='quantity-control'>
			<button type='button' className='btn' onClick={onDec}>
				-
			</button>
			<div className='quantity-text'>{quantity}</div>
			<button type='button' className='btn' onClick={onInc}>
				+
			</button>
		</div>
	);
};
