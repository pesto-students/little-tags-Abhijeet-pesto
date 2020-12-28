import './Header.css';
import SearchBar from './SearchBar/SearchBar';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
import { ReactElement, useState, useEffect } from 'react';
import classNames from 'classnames';
import { SideBar } from '../SideBar/SideBar';
import Modal from '../common/Modal/Modal';

export interface HeaderProps {
  isLoggedIn: boolean;
  userName: string;
  itemsInCart: number;
  theme: 'white' | 'dark';
}

export const Header = ({ userName, isLoggedIn, itemsInCart, theme }: HeaderProps): ReactElement => {
  const [isScrollTop, setIsScrollTop] = useState(true);
  const [sidebarHeader, setSidebarHeader] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const showSidebar = () => setSidebarHeader(!sidebarHeader);

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
          <>
            <div>
              <Router>
                <div className='navbar'>
                  <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                    {sidebarHeader ? <SideBar sidebar={sidebarHeader} /> : null}
                  </Link>
                </div>

                <Switch>
                  <Route path='/' />
                </Switch>
              </Router>
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
            {/* <span>Log in/ Sign up</span> */}
            <button className='btn  btn-light' onClick={() => setIsModalOpened(true)}>
              Log in/ Sign up
            </button>
            {isModalOpened && (
              <Modal title='Log in / Sign up.' duration={500} onClose={() => setIsModalOpened(false)}>
                <div>
                  Log in / Sign up using your
                  <div className='login_wrapper'>
                    <div>
                      <div>
                        {' '}
                        <a href='#' className='btn btn-primary btn_bg '>
                          {' '}
                          <AiIcons.AiOutlineGoogle size={28} /> {'     '} Login with Google
                          <i className='fa fa-google-plus'></i>{' '}
                        </a>{' '}
                      </div>
                    </div>
                    <div>
                      <div>
                        {' '}
                        <a href='#' className='btn btn-primary btn_bg'>
                          {'  '}
                          <FaIcons.FaFacebook size={28} />
                          <span> {'     '} Login with Facebook</span> <i className='fa fa-facebook'></i>{' '}
                        </a>{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
