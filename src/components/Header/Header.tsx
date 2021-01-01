import './Header.css';
import SearchBar from './SearchBar/SearchBar';
import * as FaIcons from 'react-icons/fa';
import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
import { ReactElement, useState, useEffect } from 'react';
import classNames from 'classnames';
import { SideBar } from '../SideBar/SideBar';
import { openLoginModal } from '../../slices/userSlice';
import { useDispatch } from 'react-redux';

export interface HeaderProps {
	isLoggedIn: boolean;
	userName: string | null;
	itemsInCart: number;
	theme: 'white' | 'dark';
}

export const Header = ({ userName, isLoggedIn, itemsInCart, theme }: HeaderProps): ReactElement => {
	const [isScrollTop, setIsScrollTop] = useState(true);
	const [sidebarHeader, setSidebarHeader] = useState(false);
	const dispatch = useDispatch();

	const showSidebar = () => setSidebarHeader(!sidebarHeader);

	const onLoginClick = () => {
		dispatch(openLoginModal());
	};

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
				{sidebarHeader ? <div className='blur-filter'></div> : ''}
				<div className='hamburger-container'>
					<>
						<div>
							<div className='navbar'>
								<span className='menu-bars'>
									<FaIcons.FaBars onClick={showSidebar} />
									{sidebarHeader ? <SideBar sidebar={sidebarHeader} /> : null}
								</span>
							</div>
						</div>
					</>
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
						<span onClick={onLoginClick}>Log in/ Sign up</span>
					</div>
				)}
			</div>
		</header>
	);
};
