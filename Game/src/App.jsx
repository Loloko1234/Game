import { useState } from "react";
import Nav from "./Components/nav";
import SearchBar from "./Components/SearchBar";
import Filter from "./Components/filter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Sub } from "./pages/Sub/Sub";
import Main from "./pages/Main/main";

function App() {
  const [clickedLink, setClickedLink] = useState(null);
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main setClickedLink={setClickedLink} />} />
          <Route
            path="/main"
            element={<Main setClickedLink={setClickedLink} />}
          />
          <Route path="/sub" element={<Sub clickedLink={clickedLink} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
