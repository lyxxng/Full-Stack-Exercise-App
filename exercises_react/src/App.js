import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercise';
import EditExercisePage from './pages/EditExercise';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Routes>
            <Route path="/" element={ <HomePage/> }/>
            <Route path="/add-exercise" element={ <CreateExercisePage/> }/>
            <Route path="/edit-exercise" element={ <EditExercisePage/> }/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;