import { ReactElement } from 'react';
import './LoginModal.css';
import { Modal } from 'react-bootstrap';
import { Button } from '../common';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { loginUser, hideLoginModal } from '../../slices/userSlice';

interface LoginModalProps {
	showModal: boolean;
}

export const LoginModal = ({ showModal }: LoginModalProps): ReactElement => {
	const dispatch = useDispatch();

	const googleSignIn = () => {
		dispatch(loginUser('google'));
	};

	const facebookSignIn = () => {
		dispatch(loginUser('facebook'));
	};

	const onModalClose = () => {
		dispatch(hideLoginModal());
	};

	return (
		<Modal show={showModal} centered dialogClassName='login-modal' onHide={onModalClose} animation={true}>
			<Modal.Body>
				<div className='heading'>
					<span>Log in / Sign up</span>
				</div>
				<div className='sub-heading'>
					<span>Log in / Sign up using your</span>
				</div>
				<div className='login-choices'>
					<Button type='button' renderIcon={<FaGoogle />} onClick={googleSignIn}>
						Google Account
					</Button>
					<Button type='button' renderIcon={<FaFacebookF />} onClick={facebookSignIn}>
						Facebook Account
					</Button>
				</div>
			</Modal.Body>
		</Modal>
	);
};
