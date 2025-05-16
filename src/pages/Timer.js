import { useState, useRef } from 'react';
import TimerControls from '../components/TimerControls';
import './Common.css';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [editing, setEditing] = useState(true);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const increase = (amount) => {
    if (editing) setSeconds((prev) => prev + amount);
  };

  const reset = () => {
    if (editing) setSeconds(0);
  };

  const start = () => {
    if (seconds > 0) {
      setRunning(true);
      setEditing(false);
      setPaused(false);
      intervalRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s <= 1) {
            clearInterval(intervalRef.current);
            alert('Taymer bitdi!');
            setRunning(false);
            setEditing(true);
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    }
  };

  const pauseOrResume = () => {
    if (paused) {
      setPaused(false);
      intervalRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s <= 1) {
            clearInterval(intervalRef.current);
            alert('Taymer bitdi!');
            setRunning(false);
            setEditing(true);
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      setPaused(true);
    }
  };

  return (
    <div className="screen">
      <h1>{seconds} saniyə</h1>
      <TimerControls onIncrease={increase} onReset={reset} disabled={!editing} />
      
      {!running && (
        <button onClick={start} disabled={running}>
          Başla
        </button>
      )}

      {running && (
        <button onClick={pauseOrResume}>
          {paused ? 'Davam et' : 'Pauza'}
        </button>
      )}
    </div>
  );
}
