import './Header.css';
import SearchBar from './SearchBar/SearchBar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
import { ReactElement } from 'react';

interface Props {
	isLoggedIn: boolean;
	userName: string;
	itemsInCart: number;
}

export const Header = ({ userName, isLoggedIn, itemsInCart }: Props): ReactElement => {
	return (
		<header>
			<div className='header-container'>
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
