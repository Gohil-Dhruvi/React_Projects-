import { useState } from 'react';
import './Counter.css'; // Make sure this CSS file exists

const Counter = ({ name }) => {
  const [count, setCount] = useState(0);

  const handleDec = () => {
    if (count <= 0) {
      alert("Count cannot go below 0!");
      return;
    }
    setCount(count - 1);
  };

  const handleRes = () => setCount(0);
  const handleInc = () => setCount(count + 1);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1 className="counter-title">{name}</h1>
        <h2 className="counter-value">{count}</h2>
        <div className="button-group">
          <button className="btn decrement" onClick={handleDec}>Decrement</button>
          <button className="btn reset" onClick={handleRes}>Reset</button>
          <button className="btn increment" onClick={handleInc}>Increment</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
