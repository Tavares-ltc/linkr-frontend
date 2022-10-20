import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { postSignUp } from '../../services/linkr';
import { TailSpin } from 'react-loader-spinner';
import {
	Button,
	Form,
	Container,
	LeftSide,
	Linkr,
	SignPage,
} from '../../common/Formstyle';

export default function SignUp() {
	const [userSignUp, setUserSignUp] = useState({
		email: '',
		password: '',
		username: '',
		url: '',
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({
		isError: false,
		message: '',
	});
	const navigate = useNavigate();

	async function handleForm(e) {
		e.preventDefault();

		try {
			setLoading(!loading);
			await postSignUp({
				email: userSignUp.email,
				password: userSignUp.password,
				name: userSignUp.username,
				image: userSignUp.url,
			});

			navigate('/');
		} catch (error) {
			setLoading(!loading);
			setError({
				isError: true,
				message: error.response.data,
			});
		}
	}

	function handleSignUp(e) {
		let value = e.target.value;
		setUserSignUp({ ...userSignUp, [e.target.name]: value });
	}
	return (
		<>
			<Container>
				<LeftSide>
					<Linkr>
						<h1>linkr</h1>
						<p>save, share and discover the best links on the web</p>
					</Linkr>
				</LeftSide>

				<SignPage>
					<Form onSubmit={handleForm}>
						<input
							autoComplete='off'
							type='email'
							name='email'
							value={userSignUp.email}
							onChange={handleSignUp}
							placeholder='e-mail'
							required
						/>
						<input
							autoComplete='off'
							type='password'
							name='password'
							value={userSignUp.password}
							onChange={handleSignUp}
							placeholder='password'
							required
						/>
						<input
							autoComplete='off'
							type='text'
							name='username'
							value={userSignUp.username}
							onChange={handleSignUp}
							placeholder='username'
							required
						/>
						<input
							autoComplete='off'
							type='url'
							name='url'
							value={userSignUp.url}
							onChange={handleSignUp}
							placeholder='picture url'
							required
						/>
						{error.isError ? <h5>{error.message}</h5> : <></>}
						<Button
							type='submit'
							onClick={() => {
								setLoading(!loading);
							}}
						>
							{loading ? <TailSpin color='#ffffff' width='10' /> : <>Sign Up</>}
						</Button>
						<Link to='/'>
							<a>Switch back to log in</a>
						</Link>
					</Form>
				</SignPage>
			</Container>
		</>
	);
}
