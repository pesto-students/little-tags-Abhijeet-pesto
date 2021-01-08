import './Header.css';
import SearchBar from './SearchBar/SearchBar';
import * as FaIcons from 'react-icons/fa';
import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
import { ReactElement, useState, useEffect } from 'react';
import classNames from 'classnames';
import { SideBar } from '../SideBar/SideBar';
import { openLoginModal, getTotalItemsInCart, logOut } from '../../slices';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { RootState } from '../../rootReducer';
import { CSSTransition } from 'react-transition-group';

export interface HeaderProps {
	userName: string | null;
	isLoggedIn: boolean;
}

export const Header = ({ userName, isLoggedIn }: HeaderProps): ReactElement => {
	const [isScrollTop, setIsScrollTop] = useState(true);
	const [sidebarHeader, setSidebarHeader] = useState(false);
	const itemsInCart = useSelector((state: RootState) => getTotalItemsInCart(state));
	const dispatch = useDispatch();
	const history = useHistory();
	const match = useRouteMatch('/');

	const theme = match?.isExact ? 'white' : 'dark';

	const showSidebar = () => setSidebarHeader(!sidebarHeader);

	const onLoginClick = () => {
		dispatch(openLoginModal());
	};

	const onLogoutClick = () => {
		dispatch(logOut());
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
				<div className='hamburger-container'>
					<div className='navbar'>
						<span className='menu-bars'>
							<FaIcons.FaBars className='hamburger' onClick={showSidebar} />
						</span>
						{sidebarHeader && <div className='blur-filter' onClick={showSidebar}></div>}
						<CSSTransition in={sidebarHeader} timeout={500} classNames='sidebar' unmountOnExit>
							<SideBar
								isLoggedIn={isLoggedIn}
								userName={userName}
								onLogoutClick={onLogoutClick}
								onCloseClick={showSidebar}
							/>
						</CSSTransition>
					</div>
				</div>
				<div className='brand-container'>
					<span onClick={() => history.push('/')}>Little Tags</span>
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
							<div className='cart-icon-container' onClick={() => history.push('/cart')}>
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
