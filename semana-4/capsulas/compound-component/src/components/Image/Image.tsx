import React from 'react';
import Menu from '../menu';
export interface ImageProps {
	source: string;
}

const Image : React.FC<ImageProps> = ({source}) => {
	return (
		<div className="image-item">
			<img src={source} alt="Wallpaper de Rick and Morty" />
			<Menu />
		</div>
	);
};

export default Image;
