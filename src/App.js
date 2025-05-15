import {   Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Clock from './pages/Clock';
import Stopwatch from './pages/Stopwatch';  
import Timer from './pages/Timer';
import './App.css';

function App() {
  return (
  
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </div>
 
  );
}

export default App;
