import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Naviation from './components/Navigation';
import CreateExercisePage from './pages/CreateExercise';
import EditExercisePage from './pages/EditExercise';
import { useState } from 'react';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <><div className="App">
      <header className="App-header">
        <h1>Exercise Tracker</h1>
        <p>Use this website to keep track of exercises, including the number of
          reps and the weight! Use the icons to edit and delete exercises.</p>
      </header>
      <Router>
        <Navigation/>
          <Routes>
            <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit} />} />
            <Route path="/add-exercise" element={<CreateExercisePage />} />
            <Route path="/edit-exercise" element={<EditExercisePage exerciseToEdit={exerciseToEdit} />} />
          </Routes>
      </Router>
    </div><footer>© 2023 Lisa Young</footer></>
  );
}

export default App;