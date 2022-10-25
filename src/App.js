import "../src/assets/css/reset.css";
import "../src/assets/css/style.css";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import Timeline from "./Pages/Timeline/Timeline";
import PrivatePage from "./components/PrivatePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTimeline from "./Pages/Timeline/UserTimeline";
import userContext from "./contexts/userContext";
import { useState } from "react";

function App() {
  const [userdata, setUserdata] = useState();
  const contextValue = { userdata, setUserdata };
  console.log(contextValue)
  return (
    <>
      <userContext.Provider value={contextValue}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/timeline"
              element={
                <PrivatePage>
                  <Timeline />
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
