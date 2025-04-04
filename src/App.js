import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');  //Wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'AksharDocs - Dark Mode' ;
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white' ;
      showAlert("Light mode has been enabled", "success");
      document.title = 'AksharDocs - Light Mode' ;
    }
  }
  return (
   <>
  

{/* <Navbar title="TextUtils" aboutText="About TextUtils"  /> */}
<Router>
<Navbar title="AksharDocs" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
<div className='container my-3'>
<Routes>
  {/* /users ---> Component 1
  /users/home---->----> Component 2 */}
    {/* <Route exact path="/about">
      <About />
    </Route>
    <Route exact path="/">
    <TextForm showAlert={showAlert} heading="Enter the text to anlyze below " mode={mode} />
    </Route> */}

<Route exact path="/about" element={<About />} />
<Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
  </Routes>
  </div>
  </Router>
{/* <About /> */}


   </>
  
  );
}

export default App;
