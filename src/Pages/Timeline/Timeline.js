import { TailSpin, ColorRing } from 'react-loader-spinner';
import Header from '../../components/Header';
import styled from 'styled-components';
export default function Timeline() {
	return (
		<>
			<Header />
			<Teste>
				<TailSpin color='blue' width='80' />
				<ColorRing
					visible={true}
					height='80'
					width='80'
					ariaLabel='blocks-loading'
					wrapperStyle={{}}
					wrapperClass='blocks-wrapper'
					colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
				/>
			</Teste>
		</>
	);
}

const Teste = styled.div`
	width: 200px;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: black;
`;
