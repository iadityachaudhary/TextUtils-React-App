import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";

function App() {
  const[mode, setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#072249';
      showAlert("Dark mode enabled","success");
      document.title="TextUtils (Dark Mode)";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success");
      document.title="TextUtils (Light Mode)";
    }
  }

  const[alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  return (
   <>
   <Router>
        <Navbar title="TextUtils" About="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* Use element prop instead of direct child */}
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
   </>
  );
}

export default App;
