import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import CreateExercisePage from './pages/CreateExercise';
import EditExercisePage from './pages/EditExercise';
import { useState } from 'react';

function App() {
  // Declare state variable for exercise that will be updated by the user
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <><div className="App">
      <body>
        <div id="box">
          <header>
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
          <footer>© 2023 Lisa Young</footer>
        </div>
      </body>
    </div></>
  );
}

export default App;