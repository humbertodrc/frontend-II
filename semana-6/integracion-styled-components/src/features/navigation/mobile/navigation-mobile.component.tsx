import { FaBars, FaTimes } from 'react-icons/fa';
import useDisclosure from 'features/modal/use-disclosure';
import { SearchBar } from 'features/search';
import { FC } from 'react';
import { useLanguage } from 'features/language';
import { NavLink } from 'react-router-dom';

const NavMobile: FC = () => {
  const { isOpen, toggle } = useDisclosure();
  const { t } = useLanguage();

  return (
    <div className={`container mobile-nav`}>
      <div className={'container'}>
        <NavLink to="/" className={'nav-link'}>
          <img className={'logo'} src={'/images/logo-dh.png'} alt={'Digital House'} />
        </NavLink>
        <button className={'icon-button'} aria-label="menu-button" onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <div className={'container'} style={{ flexDirection: 'column' }}>
          <div className={'container'} style={{ width: 400, flexDirection: 'column' }}>
            <NavLink to="/" className={'nav-link'}>
              <h3>{t('navigation.home')}</h3>
            </NavLink>
            <NavLink to="/following" className={'nav-link'}>
              <h3>{t('navigation.following')}</h3>
            </NavLink>
          </div>
          <SearchBar />
        </div>
      )}
    </div>
  );
};
export default NavMobile;
