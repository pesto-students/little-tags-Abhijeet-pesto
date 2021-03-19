import { ChangeEvent, ReactElement, useState } from 'react';
import './DeliverTo.css';
import * as GrIcons from 'react-icons/gr';
import { DeliveryCard, Button } from '../../components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../rootReducer';
import { selectAllAddress, setSelectedAddress } from '../../slices';
import classNames from 'classnames';

export const DeliverTo = (): ReactElement => {
	const allAddresses = useSelector((state: RootState) => selectAllAddress(state));
	const defaultAddressId = useSelector((state: RootState) => state.address.defaultAddressId);

	const [selectedAddressId, setSelectedAddressId] = useState(
		defaultAddressId.length !== 0 ? defaultAddressId : allAddresses.length > 0 ? allAddresses[0].id : '',
	);
	const history = useHistory();
	const dispatch = useDispatch();

	const onAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSelectedAddressId(event.target.value);
	};

	const onProceedBtnClick = () => {
		dispatch(setSelectedAddress(selectedAddressId));
		history.push('/payment');
	};

	return (
		<div
			className={classNames({
				'deliver-container': true,
				'height-ex-footer': allAddresses.length === 0,
			})}
		>
			<div className='header'>Deliver To</div>
			{allAddresses.length > 0 ? (
				<div className='card-list-container'>
					{allAddresses.map((address) => (
						<DeliveryCard
							key={address.id}
							address={address}
							selected={address.id === selectedAddressId}
							onChange={onAddressChange}
						/>
					))}
				</div>
			) : (
				<div className='no-address'>Please add an address to procced.</div>
			)}
			<div className='add-address-btn-container'>
				<button type='button' className='btn add-address-btn' onClick={() => history.push('/addaddress')}>
					<span>
						<GrIcons.GrAddCircle />
					</span>
					<span>Add New Address</span>
				</button>
			</div>
			<div>
				<Button type='button' className='proceed-btn' disabled={allAddresses.length === 0} onClick={onProceedBtnClick}>
					PROCEED
				</Button>
			</div>
		</div>
	);
};
