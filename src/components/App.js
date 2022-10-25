import SignUp from '../Pages/SignUp/SignUp';
import SignIn from '../Pages/SignIn/SignIn';
import Timeline from '../Pages/Timeline/Timeline';
import PrivatePage from './PrivatePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../Assets/styles/GlobalStyle';
import Header from './Header';
import HashtagPage from '../Pages/Hashtag/HashtagPage';
import UserTimeline from "../Pages/Timeline/UserTimeline";
import userContext from "../contexts/userContext";
import { useState } from "react";


function App() {
	const [userdata, setUserdata] = useState();
	const contextValue = { userdata, setUserdata };
	return (
		<>
			<GlobalStyle />
			<userContext.Provider value={contextValue}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<SignIn />} />
						<Route path='/sign-up' element={<SignUp />} />
						<Route
							path='/timeline'
							element={
								<PrivatePage>
									<Header />
									<Timeline />
								</PrivatePage>
							}
						/>
						<Route path='/hashtag/:hashtagName' element={
							<PrivatePage>
								<Header />
								<HashtagPage />
							</PrivatePage>
						}
						/>
						<Route
							path="/user/:id"
							element={
								<PrivatePage>
									<UserTimeline />
								</PrivatePage>
							}
						/>
					</Routes>
				</BrowserRouter>
			</userContext.Provider>
		</>
	);
}

export default App;
