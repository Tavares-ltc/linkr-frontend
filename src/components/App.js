import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../Assets/styles/GlobalStyle";
import Trending from "./Trending/Trending";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Trending />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;