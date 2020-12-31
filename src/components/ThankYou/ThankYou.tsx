import { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import './ThankYou.css';
import * as FaIcons from 'react-icons/fa';
export const ThankYou = (): ReactElement => {
	const history = useHistory();
	return (
		<div className='thankyou-container'>
			<div>
				<FaIcons.FaRegSmile size={200} />
			</div>
			<div className='text'>Thank you for shopping with us</div>
			<div>
				<button
					className='button'
					onClick={() => {
						history.push('./');
					}}
				>
					Continue shopping
				</button>
			</div>
		</div>
	);
};
