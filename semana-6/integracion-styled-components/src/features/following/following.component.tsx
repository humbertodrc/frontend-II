import { FC } from 'react';
import CharactersComponent from 'features/characters/characters.component';
import { useAppSelector } from 'store/hooks';

const FollowingComponent: FC = () => {
  const { followingIds } = useAppSelector((state) => state.following);
  return <div>{followingIds.length > 0 && <CharactersComponent ids={followingIds} />}</div>;
};

export default FollowingComponent;
