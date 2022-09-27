import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Step1} from './features/games/Step1'
import {Step2} from './features/games/Step2'
import {Step3} from './features/games/Step3'
import {Step4} from './features/games/Step4'
import {Result} from './features/games/Result'
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Step1 />}/>
      <Route path="/step2" element={<Step2 />}/>
      <Route path="/step3" element={<Step3 />}/>
      <Route path="/step4" element={<Step4 />}/>
      <Route path="/result" element={<Result />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
