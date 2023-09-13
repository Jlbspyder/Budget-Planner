import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LogIn } from "./pages/LogIn";
import { HomePage } from "./pages/HomePage";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  const [lightMode, setLightMode] = useState(true);

  const handleDarkMode = () => {
    const toggle = document.querySelector(".mode");
    toggle.addEventListener("click", () => {
      setLightMode((prev) => !prev);
      document.body.classList.toggle("darkmode");
    });
  };

  return (
    <GlobalProvider>
      <Router>
        <div className={`container ${lightMode ? "" : "darkmode"}`}>
          <Routes>
            <Route
              path="/"
              exact
              element={<LogIn mode={handleDarkMode} lightmode={lightMode} />}
            />
            <Route
              path="/homepage"
              element={<HomePage mode={handleDarkMode} lightmode={lightMode} />}
            />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
