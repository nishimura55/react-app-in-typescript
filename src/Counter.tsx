import React, { useState, useRef, useEffect } from 'react';

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  const renderTimes = useRef<number>(0);

  useEffect(() => {
    console.log('render was done');
    renderTimes.current += 1;
  });

  const ref = useRef<HTMLInputElement>(null!);

  const forcusInput = () => {
    ref.current.focus();
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type="tedxt" />
      <button onClick={forcusInput}>Click Me!</button>
    </div>
  );
};

export default Counter;
