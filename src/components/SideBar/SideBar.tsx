import React, { ReactElement, useState } from 'react';

// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SideBarData';
import './SideBar.css';
import { IconContext } from 'react-icons';
interface Props {
	sidebar: boolean;
}
export function SideBar({ sidebar }: Props): ReactElement {
	const [sidebarComponent, setSidebarComponent] = useState(sidebar);

	const showSidebarComponent = () => setSidebarComponent(!sidebarComponent);
	return (
		<>
			<IconContext.Provider value={{ color: 'black' }}>
				<nav className={sidebarComponent ? 'nav-menu active' : 'nav-menu'}>
					<ul className='nav-menu-items' onClick={showSidebarComponent}>
						<li className='navbar-toggle'>
							<span className='menu-bars'>
								<AiIcons.AiFillCloseCircle color='black' size={20}></AiIcons.AiFillCloseCircle>
							</span>
							<span className='nav-header'>LITTLE TAGS</span>
						</li>
						{SidebarData.map((item, index) => {
							return (
								<div key={index}>
									<li key={index} className={item.cName}>
										<span>
											{item.icon}
											<span>{item.title}</span>
										</span>
									</li>
								</div>
							);
						})}
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	);
}
