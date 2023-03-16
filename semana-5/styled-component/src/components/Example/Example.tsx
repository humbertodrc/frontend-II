import React from "react";
import { Button } from '../Button';
import "./styles/Example.css";

const Example: React.FC = () => {
	return (
		<div className="example">
			<h1 className="example__title">Practica</h1>
			<Button>Soy un Button</Button>
		</div>
	);
};

export default Example;
