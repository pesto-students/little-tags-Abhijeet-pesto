import { ReactElement, useState, useEffect, useRef, useLayoutEffect } from 'react';
import './Slider.css';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';

type SliderProps = {
	slides: string[];
	autoPlayInterval: number;
};

export const Slider = ({ slides }: SliderProps): ReactElement => {
	const slidesInView = [slides[slides.length - 1], ...slides, slides[0]];
	const [sliderWidth, setSliderWidth] = useState(0);
	const [activeIndex, setActiveIndex] = useState(0);
	const [translateX, setTranslateX] = useState(0);
	const [transition, setTransition] = useState(0.5);
	const autoPlayRef = useRef<() => void>();
	const resizeRef = useRef<() => void>();
	const sliderRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (sliderRef.current) {
			setSliderWidth(sliderRef.current.offsetWidth);
			setTranslateX(sliderRef.current.offsetWidth);
		}
	}, []);

	useEffect(() => {
		autoPlayRef.current = nextSlide;
		resizeRef.current = handleResize;
	});

	useEffect(() => {
		// const play = () => {
		// 	if (autoPlayRef.current) {
		// 		autoPlayRef.current();
		// 	}
		// };
		const resize = () => {
			if (resizeRef.current) {
				resizeRef.current();
			}
		};

		// const interval = setInterval(play, autoPlayInterval * 1000);
		window.addEventListener('resize', resize);
		return () => {
			// clearInterval(interval);
			window.removeEventListener('resize', resize);
		};
	}, []);

	useEffect(() => {
		if (transition === 0) {
			setTransition(0.5);
		}
	}, [transition]);

	const handleResize = () => {
		if (sliderRef.current) {
			setSliderWidth(sliderRef.current.offsetWidth);
			setTranslateX((activeIndex + 1) * sliderRef.current.offsetWidth);
			setTransition(0);
		}
	};

	const nextSlide = () => {
		setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
		setTranslateX(translateX + sliderWidth);
	};

	const prevSlide = () => {
		setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
		setTranslateX(translateX - sliderWidth);
	};

	const onNewSlideLoad = () => {
		const correctPos = (activeIndex + 1) * sliderWidth;
		if (correctPos !== translateX) {
			setTranslateX(correctPos);
			setTransition(0);
		}
	};

	const onDotClick = (slideIndex: number) => {
		setActiveIndex(slideIndex);
		setTranslateX((slideIndex + 1) * sliderWidth);
	};

	return (
		<div className='slider' ref={sliderRef}>
			{sliderWidth > 0 && (
				<>
					<SliderContent
						translateX={translateX}
						width={sliderWidth * slidesInView.length}
						transitionDuration={transition}
						onTransitionEnd={onNewSlideLoad}
					>
						{slidesInView.map((slide, i) => (
							<Slide width={sliderWidth} key={slide + i} content={slide} />
						))}
					</SliderContent>
					<Arrow direction='left' handleClick={prevSlide} />
					<Arrow direction='right' handleClick={nextSlide} />
					<Dots slides={slides} activeIndex={activeIndex} onDotClick={onDotClick} />
				</>
			)}
		</div>
	);
};
