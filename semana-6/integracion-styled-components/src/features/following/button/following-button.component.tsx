import { FC } from 'react';

type FollowingButtonProps = {
  isFav: boolean;
  onToggleFavorite: (setFav: boolean) => void;
};

const FollowingButtonComponent: FC<FollowingButtonProps> = ({
  isFav,
  onToggleFavorite
}: FollowingButtonProps) => {
  const src = isFav ? '/images/star-filled.png' : '/images/star.png';
  const alt = isFav ? 'is_favorite' : 'is_not_favorite';

  return (
    <button className={'following-button'} onClick={() => onToggleFavorite(!isFav)}>
      <img src={src} alt={alt} />
    </button>
  );
};

export default FollowingButtonComponent;
