import { NavDesktop } from 'features/navigation/desktop';
import { NavMobile } from 'features/navigation/mobile';
import { FC } from 'react';

const Navbar: FC = () => (
  <div className={'container'} style={{ width: '100vw' }}>
    <NavDesktop />
    <NavMobile />
  </div>
);

export default Navbar;
