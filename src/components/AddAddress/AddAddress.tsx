import { ReactElement } from 'react';

import './AddAddress.css';
export const AddAddress = (): ReactElement => {
	return (
		<div className='container'>
			<div className='header'>Deliver To</div>
			<div className='addAddressRow'>
				<div className='addAddressCol'>
					<div className='addInput'>First Name</div>
					<input className='addInputBox' type='text' />
					<div className='addInput'>Last Name</div>
					<input className='addInputBox' type='text' />
					<div className='addInput  '>Email Id</div>
					<input className='addInputBox' type='text' />
					<div className='addInput  '>Phone Number</div>
					<input className='addInputBox' type='text' />{' '}
				</div>
				<div className='addAddressCol'></div>

				<div className='addAddressCol'>
					<div className='addInput '>Address line 1</div>
					<input className='addInputBox' type='text' />
					<div className='addInput '>Address line 2</div>
					<input className='addInputBox' type='text' />
					<div className='addInput '>State</div>
					<select className='addInputBox'>
						<option>1</option>
						<option>1</option>
						<option>1</option>
					</select>
					<div className='addInput '>Pincode</div>
					<input className='addInputBox' type='text' />
				</div>
			</div>
			<div className='AddAddressbtn'>
				<button className='AddAddressbutton'>Add informations</button>
			</div>
		</div>
	);
};
