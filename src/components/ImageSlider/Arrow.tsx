import { ReactElement, MouseEvent } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

type ArrowProps = {
	direction: 'right' | 'left';
	handleClick: (event: MouseEvent<HTMLDivElement>) => void;
};

const Arrow = ({ direction, handleClick }: ArrowProps): ReactElement => (
	<div
		onClick={handleClick}
		className='slider-arrow'
		style={{
			right: `${direction === 'right' ? '1rem' : ''}`,
			left: `${direction === 'left' ? '1rem' : ''}`,
		}}
	>
		{direction === 'right' ? (
			<FaArrowCircleRight style={{ transform: 'translateX(2px)' }} />
		) : (
			<FaArrowCircleLeft style={{ transform: 'translateX(-2px)' }} />
		)}
	</div>
);

export default Arrow;
