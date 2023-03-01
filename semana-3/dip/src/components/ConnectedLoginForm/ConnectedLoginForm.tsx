import React from 'react';
import postApi from '../../apis/postApi';
import { LoginForm } from '../LoginForm';
export interface ConnectedLoginFormProps {}

const ConnectedLoginForm: React.FC<ConnectedLoginFormProps> = () => {
	
	const hanldeSubmit = (title: string, bodyPost: string) => {
		postApi.post("/posts", { title, body: bodyPost })
		// fetch('https://jsonplaceholder.typicode.com/posts', { body: JSON.stringify({ title, body: bodyPost }), method: 'POST' })
	};

	return <LoginForm onSubmit={hanldeSubmit} />;
};

export default ConnectedLoginForm;
