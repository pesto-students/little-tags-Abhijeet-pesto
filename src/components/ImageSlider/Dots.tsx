import { ReactElement, MouseEvent } from 'react';

type DotsProps = {
	slides: string[];
	activeIndex: number;
	onDotClick: (index: number) => void;
};

type DotProps = {
	active: boolean;
	onClick: (event?: MouseEvent<HTMLSpanElement>) => void;
};

const Dot = ({ active, onClick }: DotProps): ReactElement => (
	<span
		className='slider-dot'
		onClick={onClick}
		style={{
			background: `${active ? 'black' : '#a0a0a0'}`,
		}}
	/>
);

const Dots = ({ slides, activeIndex, onDotClick }: DotsProps): ReactElement => (
	<div className='slider-dots'>
		{slides.map((slide, i) => (
			<Dot key={slide} active={activeIndex === i} onClick={() => onDotClick(i)} />
		))}
	</div>
);

export default Dots;
