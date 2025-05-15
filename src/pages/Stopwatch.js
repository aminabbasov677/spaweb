import { useState, useRef } from 'react';
import './Common.css';

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const toggle = () => {
    if (running) {
      clearInterval(intervalRef.current);
      alert(`Vaxt: ${seconds} saniyə`);
    } else {
      intervalRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    setRunning(!running);
  };

  return (
    <div className="screen">
      <h1>{seconds} saniyə</h1>
      <button onClick={toggle}>{running ? 'Dayan' : 'Başla'}</button>
    </div>
  );
}
