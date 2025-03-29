import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';


function App() {
  return (
   <>
  

{/* <Navbar title="TextUtils" aboutText="About TextUtils"  /> */}
<Navbar title="AksharDocs" />
<div className='container'>
<TextForm heading="Enter the text to anlyze below " />
{/* <About /> */}
</div>

   </>
  
  );
}

export default App;
