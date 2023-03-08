import React from 'react';
export interface ImageProps {
	source: string;
}

const Image : React.FC<ImageProps> = ({source}) => {
	return (
		<div className="image-item">
			<img src={source} alt="Wallpaper de Rick and Morty" />
		</div>
	);
};

export default Image;
