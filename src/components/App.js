import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../Assets/styles/GlobalStyle";
import Timeline from "./Timeline/Timeline";
import UserTimeline from "./Timeline/UserTimeline";
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/user/:id" element={<UserTimeline/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
