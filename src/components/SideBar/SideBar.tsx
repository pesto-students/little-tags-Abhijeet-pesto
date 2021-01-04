import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SideBarData';
import './SideBar.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../../slices';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';

interface Props {
	sidebar: boolean;
	isLoggedIn: boolean;
	userName: string | null;
}

export const SideBar = ({ sidebar, isLoggedIn, userName }: Props): ReactElement => {
	const [sidebarComponent, setSidebarComponent] = useState(sidebar);
	const history = useHistory();
	const dispatch = useDispatch();
	const onClickHistory = (item: string) => {
		history.push(item);
	};
	const onLogout = () => {
		console.log('here');
		dispatch(logOut());
	};
	const showSidebarComponent = () => setSidebarComponent(!sidebarComponent);
	return (
		<nav className={sidebarComponent ? 'nav-menu active' : 'nav-menu'}>
			<ul className='nav-menu-items' onClick={showSidebarComponent}>
				<li className='navbar-toggle'>
					<span className='menu-bars'>
						<AiIcons.AiFillCloseCircle color='black' size={20}></AiIcons.AiFillCloseCircle>
					</span>
					<span className='nav-header'>Little Tags</span>
				</li>
				<li>
					<span className='nav-text nav-user'>
						<BiIcons.BiUserCircle size={30} />
						<span>
							Hy! {'  '}
							{isLoggedIn ? userName : ''}
						</span>
					</span>
				</li>
				{SidebarData.map((item, index) => {
					return item.title !== '' ? (
						<li key={index} className={item.cName}>
							<span onClick={() => onClickHistory(item.path)}>
								{item.icon}
								<span>{item.title}</span>
							</span>
						</li>
					) : (
						<hr></hr>
					);
				})}
				<li>
					<button className='nav-text logout' onClick={onLogout}>
						<RiIcons.RiLogoutCircleFill color='red' size={20} />
						Logout
					</button>
				</li>
			</ul>
		</nav>
	);
};
