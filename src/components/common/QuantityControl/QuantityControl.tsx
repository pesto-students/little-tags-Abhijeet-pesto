import { ReactElement, useState } from 'react';
import './QuantityControl.css';

interface QuantityControlProps {
	initialQuantity: number;
	onQuantityChange: (quantity: number) => void;
}

export const QuantityControl = ({ initialQuantity, onQuantityChange }: QuantityControlProps): ReactElement => {
	const [quantity, setQuantity] = useState(initialQuantity);

	const onInc = () => {
		setQuantity(quantity + 1);
		onQuantityChange(quantity + 1);
	};

	const onDec = () => {
		if (quantity === 1) {
			return;
		}
		setQuantity(quantity - 1);
		onQuantityChange(quantity - 1);
	};

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
