import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoute from "./Routes/user";

type routes={}
const App:React.FC<routes> = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/*" element={<UserRoute/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
