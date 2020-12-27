import { ReactElement, MouseEvent } from 'react';
import './Button.css';

interface ButtonProps {
	type: 'button' | 'submit';
	children: string;
	renderIcon?: ReactElement;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	className?: string;
}

export const Button = ({ type, onClick, className, renderIcon, children }: ButtonProps): ReactElement => {
	return (
		<button type={type} onClick={onClick} className={`btn little-tags-btn ${className}`}>
			{renderIcon && <div className='button-icon-container'>{renderIcon}</div>}
			<div className='button-text-container'>{children}</div>
		</button>
	);
};
