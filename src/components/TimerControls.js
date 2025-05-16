import './TimerControls.css';

export default function TimerControls({ onIncrease, onReset, disabled }) {
  return (
    <div className="controls">
      <button onClick={() => onIncrease(10)} disabled={disabled}>+10</button>
      <button onClick={() => onIncrease(1)} disabled={disabled}>+1</button>
      <button onClick={onReset}>Sıfırla</button>
    </div>
  );
}