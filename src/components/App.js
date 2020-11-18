import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import '../App.css';
import Header from './Header';
import Project from './Project';
// import Task from './Task';
// import Quote from './Quote';

function App() {
  const [projects, setProjects] = useState()
  const [task, setTask] = useState([])

  return (
    <div>
      <Header />
      <Route path="/" exact render={() => <Project projects={projects} setProjects={setProjects}/>}/>
    </div>
  );
}

export default App;
