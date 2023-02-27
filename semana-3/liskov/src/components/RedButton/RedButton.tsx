import React from 'react';
import { Button } from '../Button';
export interface RedButtonProps {
	// isBig: boolean;
}

const RedButton : React.FC<RedButtonProps> = () => {
	return <Button color='secondary' size='medium'>Red Button</Button>;
};

export default RedButton;
