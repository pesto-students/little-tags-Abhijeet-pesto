import { ReactElement } from 'react';

import './AddAddress.css';
export const AddAddress = (): ReactElement => {
	return (
		<div className='container'>
			<div className='header'>Deliver To</div>
			<div className='row'>
				<div className='col'>
					<div className='addInput  row-cols-1'>First Name</div>
					<input className='addInputBox' type='text' />
					<div className='addInput  row-cols-1'>Last Name</div>
					<input className='addInputBox' type='text' />
					<div className='addInput  row-cols-1'>Email Id</div>
					<input className='addInputBox' type='text' />
					<div className='addInput  row-cols-1'>Phone Number</div>
					<input className='addInputBox' type='text' />{' '}
				</div>

				<div className='col'>
					<div className='addInput row-cols-1'>Address line 1</div>
					<input className='addInputBox' type='text' />
					<div className='addInput row-cols-1'>Address line 2</div>
					<input className='addInputBox' type='text' />
					<div className='addInput row-cols-1'>State</div>
					<select className='addInputBox'>
						<option>1</option>
						<option>1</option>
						<option>1</option>
					</select>
					<div className='addInput row-cols-1'>Pincode</div>
					<input className='addInputBox' type='text' />
				</div>
			</div>
			<div className='AddAddressbtn'>
				<button className='AddAddressbutton'>Add informations</button>
			</div>
		</div>
	);
};
