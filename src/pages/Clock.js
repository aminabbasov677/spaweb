import { useEffect, useState } from 'react';
import './Common.css';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const format = (n) => n.toString().padStart(2, '0');

  return (
    <div className="screen">
      <h1>{format(time.getHours())}:{format(time.getMinutes())}:{format(time.getSeconds())}</h1>
    </div>
  );
}
