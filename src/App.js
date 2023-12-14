import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React , {useState} from 'react'
import Alert from "./components/Alert";



function App() {

  const [mode, setMode] = useState("light"); // wheather the application is in darkmode or light mode
  const [toggleText, setToggleText] = useState("Dark Mode");
  const [alert, setAlert] = useState(null); // show alert message



  // function to check the mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setToggleText("Light Mode");
      showAlert("Dark mode has been enabled","success")
    } else {
      setMode("light");
      setToggleText("Dark Mode");
      showAlert("Light mode has been enabled", "success");
    }
  };

  // function to  show the alert message
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter you text" showAlert={showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
