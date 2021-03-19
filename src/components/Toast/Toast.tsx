import { ReactElement, useEffect } from 'react';
import './Toast.css';
import { FaCheckCircle } from 'react-icons/fa';
import { RiErrorWarningFill } from 'react-icons/ri';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { IoIosWarning } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../rootReducer';
import { selectAllToasts, removeToast } from '../../slices';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import { setInterval } from 'timers';

const BACKGROUND_COLORS: { [key: string]: string } = {
	SUCCESS: '#5cb85c',
	ERROR: '#d9534f',
	INFO: '#5bc0de',
	WARNING: '#f0ad4e',
};

const defaultProps = {
	position: 'top-right',
};

type ToastProps = {
	position: string;
} & typeof defaultProps;

export const Toast = ({ position }: ToastProps): ReactElement => {
	const allToasts = useSelector((state: RootState) => selectAllToasts(state));
	const dispatch = useDispatch();

	useEffect(() => {
		if (allToasts.length > 5) {
			dispatch(removeToast(allToasts[0].id));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [allToasts]);

	const deleteToast = (id: number) => {
		dispatch(removeToast(id));
	};

	return (
		<>
			<div className={`notification-container ${position}`}>
				<TransitionGroup component={null}>
					{allToasts.map((toast) => (
						<CSSTransition key={toast.id} timeout={500} classNames='toast-item'>
							<div
								className='notification custom-toast'
								style={{ backgroundColor: BACKGROUND_COLORS[toast.title.toUpperCase()] }}
							>
								<button onClick={() => deleteToast(toast.id)}>X</button>
								<div className='notification-image'>
									{toast.title === 'success' && <FaCheckCircle />}
									{toast.title === 'error' && <RiErrorWarningFill />}
									{toast.title === 'info' && <BsFillInfoCircleFill />}
									{toast.title === 'warning' && <IoIosWarning />}
								</div>
								<div>
									<p className='notification-title'>{toast.title}</p>
									<p className='notification-message'>{toast.message}</p>
								</div>
								<div onAnimationEnd={() => deleteToast(toast.id)} className='progress-bar'></div>
							</div>
						</CSSTransition>
					))}
				</TransitionGroup>
			</div>
		</>
	);
};

Toast.defaultProps = defaultProps;
