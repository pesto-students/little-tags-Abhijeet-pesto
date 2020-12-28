import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
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
              <Link to='#' className='menu-bars'>
                <IconContext.Provider value={{ color: 'red' }}>
                  <AiIcons.AiFillCloseCircle></AiIcons.AiFillCloseCircle>
                </IconContext.Provider>
              </Link>
              <span className='nav-header'>LITTLE TAGS</span>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <div key={index}>
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                  <hr></hr>
                </div>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
