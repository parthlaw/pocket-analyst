import React from 'react';
import '../App.css';
import Select from './Select';
import Doctor from '../Components/Doctor/doctor';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router basename="/doctor">
          <Doctor />
        </Router>
      </header>
    </div>
  );
}

export default App;
