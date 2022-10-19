import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../Assets/styles/GlobalStyle";
import Timeline from "./Timeline/Timeline";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
