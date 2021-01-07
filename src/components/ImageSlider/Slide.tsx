import { ReactElement } from 'react';

type SlideProps = {
	content: string;
	width: number;
};

const Slide = ({ content, width }: SlideProps): ReactElement => (
	<div
		className='slider-slide'
		style={{
			width,
			backgroundImage: `url(${content})`,
		}}
	></div>
);

export default Slide;
