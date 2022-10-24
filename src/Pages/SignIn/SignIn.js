import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { postSignIn } from '../../services/linkr';
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
	const [userLogin, setUserLogin] = useState({
		email: '',
		password: '',
	});
	const [loading, setLoading] = useState(false);
	const [disable, setDisable] = useState(false);
	const [error, setError] = useState({
		isError: false,
		message: '',
	});
	const navigate = useNavigate();
	
	useEffect(()=> {
		const token = JSON.parse(localStorage.getItem("linkr"))?.token;
		if(token){
			navigate("/timeline")
		}
	}, [])

	async function handleForm(e) {
		e.preventDefault();
		setDisable(!disable);
		try {
			const data = await postSignIn({
				email: userLogin.email,
				password: userLogin.password,
			});
			setLoading(!loading);
			const JSONauth = JSON.stringify({
				token: data.data.token,
			});
			localStorage.setItem('linkr', JSONauth);
			navigate('/timeline');
		} catch (error) {
			setLoading(!loading);
			setError({
				isError: true,
				message: error.response.data,
			});
		}
	}

	function handleSignIn(e) {
		const value = e.target.value;
		setUserLogin({ ...userLogin, [e.target.name]: value });
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
							value={userLogin.email}
							onChange={handleSignIn}
							placeholder='e-mail'
							required
						/>
						<input
							autoComplete='off'
							type='password'
							name='password'
							value={userLogin.password}
							onChange={handleSignIn}
							placeholder='password'
							required
						/>
						{error.isError ? <h5>{error.message}</h5> : <></>}
						<Button
							type='submit'
							disabled={disable}
							onClick={() => {
								setLoading(!loading);
								setTimeout(() => {
									setLoading(false);
								}, 800);
							}}
						>
							{loading ? <TailSpin color='#ffffff' width='10' /> : <>Log In</>}
						</Button>
						<Link to='/sign-up'>
							<a>First time? Create an account!</a>
						</Link>
					</Form>
				</SignPage>
			</Container>
		</>
	);
}
