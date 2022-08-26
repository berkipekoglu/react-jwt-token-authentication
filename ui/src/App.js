import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [userName, setUserName] = useState("Berk");

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
}

export default App;
