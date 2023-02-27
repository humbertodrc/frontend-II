import React from "react";

export interface WithButtonTitleProps {
	onClick: () => void;
	buttonText: string;
}

const WithButtonTitle: React.FC<WithButtonTitleProps> = ({
	onClick,
	buttonText,
}) => {
	return <button onClick={onClick}>{buttonText}</button>;
};

export default WithButtonTitle;
