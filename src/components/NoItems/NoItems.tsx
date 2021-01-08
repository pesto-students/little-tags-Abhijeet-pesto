import { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

interface NoItemsProps {
	message: string;
}

export const NoItems = ({ message }: NoItemsProps): ReactElement => {
	const history = useHistory();

	return (
		<div className='no-items'>
			<span>{message}</span>
			<div>
				<button
					className='continue-shopping-btn'
					onClick={() => {
						history.push('/');
					}}
				>
					Continue shopping
				</button>
			</div>
		</div>
	);
};
