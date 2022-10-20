import '../src/assets/css/reset.css';
import '../src/assets/css/style.css';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import Timeline from './Pages/Timeline/Timeline';
import PrivatePage from './components/PrivatePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
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
