import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PrivatePage({ children }) {
	const authorization = JSON.parse(localStorage.getItem('linkr'));
	const navigate = useNavigate();

	if (authorization) {
		return <>{children}</>;
	} else {
		// useEffect(() => {
		// 	navigate('/');
		// }, []);
		navigate('/');
	}
}
