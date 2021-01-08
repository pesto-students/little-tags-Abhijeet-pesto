import React, { ReactElement, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import { SidebarData, LoggedInUser } from './SideBarData';
import './SideBar.css';
import { useDispatch } from 'react-redux';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';
import { setInventoryFilter } from '../../slices';

interface Props {
	isLoggedIn: boolean;
	userName: string | null;
	onCloseClick: (event: MouseEvent<HTMLOrSVGElement>) => void;
	onLogoutClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

interface itemObj {
	title: string | undefined;
	path: string;
	cName: string | undefined;
	icon: string | undefined;
	category: string;
}

export const SideBar = ({ isLoggedIn, userName, onLogoutClick, onCloseClick }: Props): ReactElement => {
	// const [sidebarComponent, setSidebarComponent] = useState(sidebar);
	const history = useHistory();
	const dispatch = useDispatch();

	const onClickHistory = (item: itemObj) => {
		const category = item.category;
		if (category?.length === 0) history.push(item.path);
		else {
			dispatch(
				setInventoryFilter({
					filter: {
						filterBy: 'category',
						filterValue: item.category,
					},
				}),
			);
			history.push(`/viewall`);
		}
	};

	// const onLogout = (event: MouseEvent<HTMLButtonElement>) => {
	// 	event.preventDefault();
	// 	dispatch(logOut());
	// };

	// const showSidebarComponent = () => setSidebarComponent(!sidebarComponent);

	return (
		<nav className='nav-menu'>
			<ul className='nav-menu-items'>
				<li className='navbar-toggle' key='header'>
					<div className='sidebar-close'>
						<AiIcons.AiFillCloseCircle color='black' onClick={onCloseClick}></AiIcons.AiFillCloseCircle>
					</div>
					<div className='nav-header'>
						<span>Little Tags</span>
					</div>
				</li>
				{isLoggedIn && (
					<li key='userName'>
						<div className='nav-text nav-user'>
							<BiIcons.BiUserCircle size={30} />
							<span>Hey! {userName}</span>
						</div>
					</li>
				)}
				{SidebarData.map((item, index) => {
					return item.title === 'CATEGORIES' ? (
						<li key={index} className={`nav-heading nav-item ${item.cName}`}>
							<div>
								<span>{item.title}</span>
							</div>
						</li>
					) : (
						<li key={index} className={`${item.cName} nav-link nav-item`}>
							<div>
								<span onClick={() => onClickHistory(item)}>{item.title}</span>
							</div>
						</li>
					);
				})}
				<hr className='nav-divider'></hr>
				{isLoggedIn &&
					LoggedInUser.map((item, index) => {
						return (
							<li key={index} className={`${item.cName} nav-link nav-item nav-loggedin-link`}>
								<span onClick={() => onClickHistory(item)}>
									{item.icon}
									<span>{item.title}</span>
								</span>
							</li>
						);
					})}
				{isLoggedIn && (
					<li className='nav-logout'>
						<button className='nav-logout-btn' onClick={onLogoutClick}>
							<RiIcons.RiLogoutCircleFill color='red' />
							Logout
						</button>
					</li>
				)}
			</ul>
		</nav>
	);
};
