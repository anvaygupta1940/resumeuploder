import React from 'react'
import "./App.css";
import SignUp from './Components/SignUp/SignUp'
import ResumeAppload from './Components/ResumeAppload/ResumeAppload';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<SignUp></SignUp>}></Route>
        <Route path='/resume' element={<ResumeAppload></ResumeAppload>}></Route>
      </Routes>
    </div>
  )
}

export default App;
