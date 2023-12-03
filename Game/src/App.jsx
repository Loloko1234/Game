import { useState } from "react";
import Nav from "./Components/nav";
import SearchBar from "./Components/SearchBar";
import Filter from "./Components/filter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Sub } from "./pages/Sub/Sub";
import Main from "./pages/Main/main";

function App() {
  const [clickedLink, setClickedLink] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div>
      <Router>
        <Nav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <Main setClickedLink={setClickedLink} isDarkMode={isDarkMode} />
            }
          />
          <Route
            path="/main"
            element={
              <Main setClickedLink={setClickedLink} isDarkMode={isDarkMode} />
            }
          />
          <Route
            path="/sub"
            element={<Sub clickedLink={clickedLink} isDarkMode={isDarkMode} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
