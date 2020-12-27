import './Header.css';
import SearchBar from './SearchBar/SearchBar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
import { ReactElement, useState, useEffect } from 'react';
import classNames from 'classnames';

export interface HeaderProps {
	isLoggedIn: boolean;
	userName: string;
	itemsInCart: number;
	theme: 'white' | 'dark';
}

export const Header = ({ userName, isLoggedIn, itemsInCart, theme }: HeaderProps): ReactElement => {
	const [isScrollTop, setIsScrollTop] = useState(true);

	useEffect(() => {
		const onScroll = () => {
			if (window.document.scrollingElement) {
				const scrolled = window.document.scrollingElement.scrollTop;
				if (scrolled >= 5) {
					setIsScrollTop(false);
				} else {
					setIsScrollTop(true);
				}
			}
		};
		window.document.addEventListener('scroll', onScroll);
		return () => {
			window.document.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<header>
			<div
				className={classNames({
					'header-container': true,
					[`${theme}`]: true,
					'scroll-bg': !isScrollTop,
				})}
			>
				<div className='hamburger-container'>
					<GiHamburgerMenu />
				</div>
				<div className='brand-container'>
					<span>Little Tags</span>
				</div>
				<div className='searchbar-container'>
					<SearchBar />
				</div>
				{isLoggedIn ? (
					<div className='user-details-container'>
						<div>
							<div className='user-details'>
								<FaRegUserCircle />
								<span>{userName}</span>
							</div>
							<div className='cart-icon-container'>
								<FaShoppingCart />
								{itemsInCart > 0 && <span className='cart-items'>{itemsInCart}</span>}
							</div>
						</div>
					</div>
				) : (
					<div className='login-container'>
						<span>Log in/ Sign up</span>
					</div>
				)}
			</div>
		</header>
	);
};
