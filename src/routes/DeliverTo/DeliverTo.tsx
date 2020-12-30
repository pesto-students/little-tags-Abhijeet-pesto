import { ReactElement } from 'react';
import './DeliverTo.css';
import * as GrIcons from 'react-icons/gr';
import { DeliveryCard } from '../../components/common';

export const DeliverTo = (): ReactElement => {
	return (
		<div className='deliver-container'>
			<div className='header'>Deliver To</div>

			<DeliveryCard
				onChange={() => undefined}
				name='Add'
				value='Address'
				label={
					<div>
						<div className='name'> Sagar Patel</div>
						<div className='address'>1418 Riverwood Drive, Suite 3245 Cottonwood, DL 110092, India </div>
					</div>
				}
			/>
			<DeliveryCard
				onChange={() => undefined}
				name='Add'
				value='Address'
				label={
					<div>
						<div className='name'> Sagar Patel</div>
						<div className='address'> New York, </div>
					</div>
				}
			/>

			<button className='addNewAdd'>
				<GrIcons.GrAddCircle />
				Add Address
			</button>

			<div className='proceedBtnPadding'>
				<button className='proceedButton'>Proceed</button>
			</div>
		</div>
	);
};
