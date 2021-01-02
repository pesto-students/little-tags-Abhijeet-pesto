import { ReactElement } from 'react';
import './DeliverTo.css';
import * as GrIcons from 'react-icons/gr';
import { DeliveryCard, Button } from '../../components/common';

export const DeliverTo = (): ReactElement => {
	return (
		<div className='deliver-container'>
			<div className='header'>Deliver To</div>
			<div className='card-list-container'>
				<DeliveryCard onChange={() => undefined} name='Add' value='Address' />
				<DeliveryCard onChange={() => undefined} name='Add' value='Address' />
			</div>
			<div className='add-address-btn-container'>
				<button type='button' className='btn add-address-btn'>
					<span>
						<GrIcons.GrAddCircle />
					</span>
					<span>Add New Address</span>
				</button>
			</div>
			<div>
				<Button type='button' className='proceed-btn'>
					PROCEED
				</Button>
			</div>
		</div>
	);
};
