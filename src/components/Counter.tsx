import { useRerenderCount } from '../hooks/useRerenderCount';
import React, { useCallback, useState } from 'react'
import { Button } from './Button';

type Props = {}

export const Counter = (props: Props) => {
    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(() => {
      setCount((prev) => prev + 1);
    }, [setCount]);
    
    const handleDecrement = useCallback(() => {
      setCount((prev) => prev - 1);
    }, [setCount]);
    const rerenderCount = useRerenderCount();
  
    return (
      <>
        <h1>Count: {count}</h1>
        <h1>rerenderCount: {rerenderCount}</h1>
        <Button onClick={handleIncrement}>increment</Button>
        <Button onClick={handleDecrement}>decrement</Button>
      </>
    );
}