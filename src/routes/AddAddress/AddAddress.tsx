import { ChangeEvent, ReactElement, useState } from 'react';
import { STATEARR } from '../../utilities';
import './AddAddress.css';
import { Button } from '../../components';
import { v4 as uniqueId } from 'uuid';
import { Address, addAddress, setDefaultAddress } from '../../slices';
import { useDispatch } from 'react-redux';

export const AddAddress = (): ReactElement => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [emailId, setEmailId] = useState('');
	const [phoneNo, setphoneNo] = useState('');
	const [addressLine1, setAddressLine1] = useState('');
	const [addressLine2, setAddressLine2] = useState('');
	const [stateAdd, setStateAdd] = useState(STATEARR[0]);
	const [pinCode, setPinCode] = useState('');
	const [isDefault, setIsDefault] = useState(false);
	const [isSaveClicked, setisSaveClicked] = useState(false);

	const dispatch = useDispatch();

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
			pinCode !== ''
		) {
			const id = uniqueId();
			const address: Address = {
				id,
				firstName: firstName.trim(),
				lastName: lastName.trim(),
				email: emailId,
				phone: Number(phoneNo),
				mainAddress: addressLine1.trim(),
				subAddress: addressLine2.trim(),
				state: stateAdd,
				pinCode: Number(pinCode),
			};
			dispatch(addAddress(address));
			if (isDefault) {
				dispatch(setDefaultAddress(id));
			}
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
							return (
								<option key={item + index} value={item}>
									{item}
								</option>
							);
						})}
					</select>

					<div className='addInput '>Pincode</div>
					<input
						className='addInputBox'
						type='text'
						value={pinCode}
						maxLength={6}
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							if (event.target.value === '' || numberRegex.test(event.target.value)) {
								setPinCode(event.target.value);
							}
						}}
					/>
					{isSaveClicked ? pinCode === '' ? <span className='field-required'>This field is required</span> : '' : ''}
				</div>
			</div>
			<div className='address-checkbox-conatiner'>
				<label>
					<input
						type='checkbox'
						name='defaultAddress'
						checked={isDefault}
						onChange={(e) => setIsDefault(e.target.checked)}
					/>
					<span>Set as default address</span>
				</label>
			</div>
			<div className='add-btn-container'>
				<Button type='button' onClick={validateDetails}>
					ADD INFORMATION
				</Button>
			</div>
		</div>
	);
};
