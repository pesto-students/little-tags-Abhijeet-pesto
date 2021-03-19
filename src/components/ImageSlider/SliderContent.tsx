import { ReactElement, TransitionEvent } from 'react';

type SliderContentProps = {
	width: number;
	translateX: number;
	transitionDuration: number;
	children: ReactElement[];
	onTransitionEnd: (event: TransitionEvent<HTMLDivElement>) => void;
};

const SliderContent = ({
	translateX,
	width,
	transitionDuration,
	onTransitionEnd,
	children,
}: SliderContentProps): ReactElement => {
	return (
		<div
			className='slider-content'
			onTransitionEnd={onTransitionEnd}
			style={{
				width: `${width}px`,
				transform: `translateX(-${translateX}px)`,
				transition: `transform ${transitionDuration}s ease-out`,
			}}
		>
			{children}
		</div>
	);
};

export default SliderContent;
