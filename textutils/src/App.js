import Textform from "./components/textfile";
import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import { useState } from "react";
import Alert from "./components/alert";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
let name = "Shritej";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  const togglebar = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode Enabled", "success");
      document.title = "Text Utils-Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enabled", "success");
      document.title = "Text Utils-Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar about="ABOUT" tittle="Home" mode={mode} togglebar={togglebar} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/textutils"
              element={
                <Textform
                  heading="Enter your text"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
