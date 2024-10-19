import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/store/hooks';
import { increment, decrement, incrementByAmount } from '../app/store/store';

const ReduxTest: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Redux Test</h2>
      <p className="mb-4">Count: {count}</p>
      <div className="space-x-2">
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default ReduxTest;
