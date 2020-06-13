import React from 'react';
import './App.css';
import Dinner from './Dinner.js';

function App() {
  return (
   <div className='App'>
     {/* <Dinner></Dinner> */}
     <Dinner dishName='Nihari' sweetDish='Kheer' />
     <hr />
     <Dinner dishName='Biryani'sweetDish='Jaleebi' />
     <hr />
     <Dinner dishName='Karahi' sweetDish='Ras Malayi' />
   </div>
  );
}

export default App;
