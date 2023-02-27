import React from "react";
export interface WithLinkTitleProps {
	href: string;
	buttonText: string;
}

const WithLinkTitle: React.FC<WithLinkTitleProps> = ({href, buttonText}) => {
	return (
		<div>
			<a href={href}>{buttonText}</a>
		</div>
	);
};

export default WithLinkTitle;
