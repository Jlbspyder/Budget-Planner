import React, { useState } from "react";
import { Balance } from "./components/Balance";
import { Income } from "./components/Income";
import { ExpenseList } from "./components/ExpenseList";
import { AddExpense } from "./components/AddExpense";
import { Header } from "./components/Header";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  const [lightMode, setLightMode] = useState(true)

  
  const handleDarkMode = () => {
    const toggle = document.querySelector(".mode");
    toggle.addEventListener('click', () => {
      setLightMode(prev => !prev)
      document.body.classList.toggle('darkmode')
    })
  }

  
  return (
    <GlobalProvider>
      <div className={`container ${lightMode ? "" : "darkmode"}`}>
        <Header mode={handleDarkMode} lightmode={lightMode}  />
        <Balance lightmode={lightMode} />
        <Income lightmode={lightMode}  />
        <ExpenseList lightmode={lightMode} />
        <AddExpense  lightmode={lightMode} />
      </div>
    </GlobalProvider>
  );
}

export default App;
