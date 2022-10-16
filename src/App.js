import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// THIS IS A BACKUP PROJECT OF DEPLOYED VERSION

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState()
  const [btnText, setBtnText] = useState('DarkMode')

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#0e0f0f'
      setBtnText('LightMode')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      // showAlert('LightMode','success')
      setBtnText('DarkMode')
    }
  }
  return (
    <>
      <Router>
        <Navbar title='TextUtills' about='About' mode={mode} toggleMode={toggleMode} btnText={btnText} />
        <Alert alert={alert}/>
        <div className="container my-3">
        </div>
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading='TextUtills multiUtility Text Manipulator' mode={mode}/>}/>
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
