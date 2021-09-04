import Header from "./components/Header";
import React from 'react'
import { Sidebar } from "./components/Sidebar";



function App() {
  return (
    <>
    <Header />
    <div className='main-wrapper'>
    <Sidebar />
    </div>
    
    </>
  );
}

export default App;
