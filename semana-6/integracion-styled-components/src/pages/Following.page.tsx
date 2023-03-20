import { FC } from 'react';
import { FollowingComponent } from 'features/following';

/**
 * Following page
 *
 * Usage:
 * ``` <FollowingPage /> ```
 *
 * @returns the following page
 */
const FollowingPage: FC = () => (
  <div className={'container'} style={{ flexDirection: 'column' }}>
    <h2>Following Characters</h2>
    <FollowingComponent />
  </div>
);

export default FollowingPage;
