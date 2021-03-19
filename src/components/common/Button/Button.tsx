import { ReactElement, MouseEvent } from 'react';
import './Button.css';

const defaultProps = {
	disabled: false,
};

type ButtonProps = {
	type: 'button' | 'submit';
	children: string;
	disabled: boolean;
	renderIcon?: ReactElement;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	className?: string;
} & typeof defaultProps;

export const Button = ({ type, onClick, className, renderIcon, disabled, children }: ButtonProps): ReactElement => {
	return (
		<button type={type} onClick={onClick} className={`btn little-tags-btn ${className}`} disabled={disabled}>
			{renderIcon && <div className='button-icon-container'>{renderIcon}</div>}
			<div className='button-text-container'>{children}</div>
		</button>
	);
};

Button.defaultProps = defaultProps;
