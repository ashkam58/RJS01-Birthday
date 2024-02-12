import { useState } from 'react';
import './App.css';
import List from "./List.js"
import Data from "./data.js"

function App() {
  const [people, setPeople] = useState(Data)
  return (
    <main>
      <div className='container'>
      <h2>{people.length} Birthdays Today</h2>
        <List people={people}/>
        <div id='btn'>
        <button onClick={()=>setPeople([])} className='btn'>Clear List</button>
        </div>
      </div>
    </main>
  );
}

export default App;
