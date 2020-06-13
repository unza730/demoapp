import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
   <div className='App'>
     {/* <Dinner></Dinner> */}
     <Dinner dishName='Nihari' />
     <hr />
     <Dinner dishName='Biryani' />
     <hr />
     <Dinner dishName='Karahi' />
   </div>
  );
}

export default App;
