import React from 'react';
import './App.css';
import Person from "./components/Person";


const App = () => {
  return (
      <div className="App">
          <Person name="Ana" age="20"/>
          <Person name="Maria" age="25">
              <p>My hobbies are reading and hiking.</p>
          </Person>
      </div>
  );
};

export default App;