import { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = (cls) => {
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#072249';
      showAlert("Dark mode enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  // Update document title based on mode
  useEffect(() => {
    document.title = `TextUtils (${mode === 'dark' ? 'Dark Mode' : 'Light Mode'})`;
  }, [mode]);

  return (
    <>
      <Router>
        <Navbar title="TextUtils" About="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
