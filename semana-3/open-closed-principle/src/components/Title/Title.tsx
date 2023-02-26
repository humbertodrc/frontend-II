import React from "react";
import styles from "./styles/Title.module.css";
export interface TitleProps {
	title: string;
	type:"default" | "withLink" | "withButton";
	href?: string;
	buttonText?: string;
	onClick?: () => void;
}

// No cumple con el principio Open-Closed ya que se debe modificar el componente para agregar un nuevo tipo de título con button o link

const Title: React.FC<TitleProps> = ({title, type, href, buttonText, onClick}) => {
	return <div className={styles.title}>
		<h1>{title}</h1>

		{type === "withLink" && (
			<div>
				<a href={href}>{buttonText}</a>
			</div>
		)}
		
		{type === "withButton" && (
			<button onClick={onClick}>{buttonText}</button>
			)}
	</div>;
};

export default Title;
