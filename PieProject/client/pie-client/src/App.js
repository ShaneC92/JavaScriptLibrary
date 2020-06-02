import React, {useState} from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies/Pies';

function App() {

  const [sessionToken, setSessionToken] = useState(undefined);
  
  const viewConductor = () => {
    return sessionToken !== undefined ? <Pies /> : <Auth />
  }

  return (
    <div className="App">
      <Navbar token={sessionToken} />
      {viewConductor()}
    </div>
  );
}

export default App;

// ARRAY DESTRUCTURING

// destructuring in JavaScript is a simplified method of extrating multiple properties from an array by taking the structure of the array, and then deconstructing it down into individual parts by assigning them variables.

// let [first, second, third] = ['Fellowship of the Ring', 'Two Towers', 'Return of the King'];
// console.log(first, second, third);

// let [a, , c] = ['Mercury', 'Venus', 'Mars'];
// console.log(a);
// console.log(c);

// let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
// let [first, , third, ...others] = planets;
// ... = spread operator

// console.log(first);
// console.log(third);
// console.log(others);