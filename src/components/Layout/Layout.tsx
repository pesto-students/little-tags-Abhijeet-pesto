import './Layout.css';
import { ReactElement } from 'react';
import { Header, HeaderProps } from '../Header/Header';
import { Footer } from '../Footer/Footer';

interface LayoutProps extends HeaderProps {
	children: ReactElement;
}

export const Layout = ({ userName, isLoggedIn, children }: LayoutProps): ReactElement => {
	return (
		<>
			<div className='header'>
				<Header isLoggedIn={isLoggedIn} userName={userName} />
			</div>
			{children}
			<div className='footer'>
				<Footer />
			</div>
		</>
	);
};
