import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import './LoginPage.css';

import { loginUser } from '../../slices';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { Button } from '../../components/common';

export const LoginPage = (): ReactElement => {
	const dispatch = useDispatch();

	const googleSignIn = () => {
		dispatch(loginUser('google'));
	};

	const facebookSignIn = () => {
		dispatch(loginUser('facebook'));
	};

	return (
		<div className='loginPage-container height-ex-footer'>
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
				<br />
				<Button type='button' renderIcon={<FaFacebookF />} onClick={facebookSignIn}>
					Facebook Account
				</Button>
			</div>
		</div>
	);
};
