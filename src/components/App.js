import SignUp from '../Pages/SignUp/SignUp';
import SignIn from '../Pages/SignIn/SignIn';
import Timeline from './Timeline/Timeline';
import PrivatePage from './PrivatePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../Assets/styles/GlobalStyle';

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<SignIn />} />
					<Route path='/sign-up' element={<SignUp />} />
					<Route
						path='/timeline'
						element={
							<PrivatePage>
								<Timeline />
							</PrivatePage>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
