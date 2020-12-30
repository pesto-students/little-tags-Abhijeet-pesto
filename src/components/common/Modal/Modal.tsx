/* eslint-disable react/prop-types */
import { useEffect, useRef, FC, ReactNode } from 'react';
import './Modal.css';

interface ModalProps {
	title: string;
	children: ReactNode;
	onClose: () => void;
	duration?: number;
	showCloseBtn?: boolean;
}

const Modal: FC<ModalProps> = ({ title, children, onClose, duration = 300, showCloseBtn }) => {
	const modal = useRef<HTMLDivElement>(null);
	const modalBg = useRef<HTMLDivElement>(null);
	const modalContent = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		if (modal.current) {
			modal.current.classList.add('disable-click');
		}
		if (modalBg.current) {
			modalBg.current.style.transitionDuration = duration + 'ms';
		}
		if (modalContent.current) {
			modalContent.current.style.transitionDuration = duration + 'ms';
		}

		setTimeout(() => {
			if (modalBg.current) {
				modalBg.current.style.opacity = 0.2 + '';
			}
			if (modalContent.current) {
				modalContent.current.style.opacity = 1 + '';
				modalContent.current.style.top = 0 + '';
			}
		}, 20);

		setTimeout(() => {
			if (modal.current) {
				modal.current.classList.remove('disable-click');
			}
		}, duration + 20);

		return () => {
			document.body.style.overflow = 'visible';
		};
	}, [duration]);

	const modalCloseHandler = () => {
		if (modal.current) {
			modal.current.classList.add('disable-click');
		}
		if (modalBg.current) {
			modalBg.current.style.opacity = 0 + '';
		}
		if (modalContent.current) {
			modalContent.current.style.opacity = 0 + '';
			modalContent.current.style.top = '-100px';
		}

		setTimeout(() => {
			if (modal.current) {
				modal.current.classList.remove('disable-click');
			}
			onClose();
		}, duration);
	};

	return (
		<div className='modal' ref={modal}>
			<div className='modal__bg' onClick={modalCloseHandler} ref={modalBg}></div>
			<div className='modal__inner' ref={modalContent}>
				<div className='modal__head'>
					{title}
					{showCloseBtn && (
						<button className='btn' onClick={modalCloseHandler}>
							&times;
						</button>
					)}
				</div>
				<div className='modal__body'>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
