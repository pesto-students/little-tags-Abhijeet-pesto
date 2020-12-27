import './Layout.css';
import { ReactElement } from 'react';
import { Header, HeaderProps } from '../Header/Header';
import { Footer } from '../footer/footer';

interface LayoutProps extends HeaderProps {
	children: ReactElement;
}

export const Layout = ({ userName, isLoggedIn, itemsInCart, theme, children }: LayoutProps): ReactElement => {
	return (
		<div>
			<div className='header'>
				<Header isLoggedIn={isLoggedIn} userName={userName} itemsInCart={itemsInCart} theme={theme} />
			</div>
			<div className='content'>{children}</div>
			<div className='footer'>
				<Footer />
			</div>
		</div>
	);
};
