import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {

  // let obj = {
  //   name: 'jagdeep jakhu'
  // }
//  const [col, setCol] = useState('white')
 const [darkMode, setDarkMode] = useState('light');
 const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        message: message,
        type : type
      })
      setTimeout(() => {
          setAlert(null);
      }, 3000)
  }

 const toggleMode = () => {
    if(darkMode === 'light'){
       setDarkMode('dark');
      //  setCol('white');
      document.body.style.backgroundColor = 'gray';
      // change the title according to the page
      document.title = 'textUtils - Dark Mode';
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
       setDarkMode('light');
      //  setCol('black');
      document.body.style.backgroundColor = 'white';
       document.title = 'textUtils - Light Mode';
      showAlert("Light Mode has been enabled", "success")
    }
 }

 

  return (
    <>
      <BrowserRouter>
      <Navbar mode={darkMode} toggle={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
      <Route path='/' element={<TextForm heading="Enter the text to analyze" mode={darkMode} showAlert={showAlert}/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;


      // {/* <Navbar obj={obj}/> */}
      // {/* <Navbar  mode={darkMode} toggle={toggleMode} /> */}
//  <Alert alert={alert}/>
//       <div className="container my-3">
//       <TextForm heading="Enter the text to analyze" mode={darkMode} showAlert={showAlert}/>
//       {/* <About/> */}
//       </div>
 