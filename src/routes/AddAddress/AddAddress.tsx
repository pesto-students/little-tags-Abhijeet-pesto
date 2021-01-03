import { ChangeEvent, ReactElement, useState } from 'react';
import { STATEARR } from '../../utilities';
import './AddAddress.css';

export const AddAddress = (): ReactElement => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [emailId, setEmailId] = useState('');
	const [phoneNo, setphoneNo] = useState('');

	const [addressLine1, setAddressLine1] = useState('');
	const [addressLine2, setAddressLine2] = useState('');
	const [stateAdd, setStateAdd] = useState('');
	const [pincode, setPincode] = useState('');

	const [isSaveClicked, setisSaveClicked] = useState(false);

	const numberRegex = /^[0-9\b]+$/;
	const validateDetails = () => {
		if (
			firstName !== '' &&
			lastName !== '' &&
			emailId !== '' &&
			phoneNo !== '' &&
			addressLine1 !== '' &&
			addressLine2 !== '' &&
			stateAdd !== '' &&
			pincode !== ''
		) {
			console.log('Validated');
			setisSaveClicked(false);
		} else {
			setisSaveClicked(true);
		}
	};

	return (
		<div className='address-container'>
			<div className='header'>Deliver To</div>
			<div className='addAddressRow'>
				<div className='addAddressCol'>
					<div className='addInput'>First Name</div>
					<input
						className='addInputBox'
						type='text'
						value={firstName}
						onChange={(e) => {
							setFirstName(e.target.value);
						}}
					/>
					{isSaveClicked ? firstName === '' ? <span className='field-required'>This field is required</span> : '' : ''}
					<div className='addInput'>Last Name</div>
					<input
						className='addInputBox'
						type='text'
						value={lastName}
						onChange={(e) => {
							setLastName(e.target.value);
						}}
					/>
					{isSaveClicked ? lastName === '' ? <span className='field-required'>This field is required</span> : '' : ''}
					<div className='addInput  '>Email Id</div>
					<input
						className='addInputBox'
						type='text'
						value={emailId}
						onChange={(e) => {
							setEmailId(e.target.value);
						}}
					/>
					{isSaveClicked ? emailId === '' ? <span className='field-required'>This field is required</span> : '' : ''}
					<div className='addInput'>Phone Number</div>
					<input
						className='addInputBox'
						type='text'
						pattern='[0-9]{0,5}'
						maxLength={10}
						value={phoneNo}
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							if (event.target.value === '' || numberRegex.test(event.target.value)) {
								setphoneNo(event.target.value);
							}
						}}
					/>{' '}
					{isSaveClicked ? phoneNo === '' ? <span className='field-required'>This field is required</span> : '' : ''}
				</div>
				<div className='addAddressCol'></div>

				<div className='addAddressCol'>
					<div className='addInput '>Address line 1</div>
					<input
						className='addInputBox'
						type='text'
						value={addressLine1}
						onChange={(e) => {
							setAddressLine1(e.target.value);
						}}
					/>
					{isSaveClicked ? (
						addressLine1 === '' ? (
							<span className='field-required'>This field is required</span>
						) : (
							''
						)
					) : (
						''
					)}
					<div className='addInput '>Address line 2</div>
					<input
						className='addInputBox'
						type='text'
						value={addressLine2}
						onChange={(e) => {
							setAddressLine2(e.target.value);
						}}
					/>
					{isSaveClicked ? (
						addressLine2 === '' ? (
							<span className='field-required'>This field is required</span>
						) : (
							''
						)
					) : (
						''
					)}
					<div className='addInput '>State</div>
					<select
						className='addInputBox'
						value={stateAdd}
						onChange={(e) => {
							setStateAdd(e.target.value);
						}}
					>
						{STATEARR.map((item, index) => {
							return <option key={index}>{item}</option>;
						})}
					</select>

					<div className='addInput '>Pincode</div>
					<input
						className='addInputBox'
						type='text'
						value={pincode}
						maxLength={6}
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							if (event.target.value === '' || numberRegex.test(event.target.value)) {
								setPincode(event.target.value);
							}
						}}
					/>
					{isSaveClicked ? pincode === '' ? <span className='field-required'>This field is required</span> : '' : ''}
				</div>
			</div>
			<div className='AddAddressbtn'>
				<button className='AddAddressbutton' onClick={validateDetails}>
					Add informations
				</button>
			</div>
		</div>
	);
};
