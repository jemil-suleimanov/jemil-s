import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/lib/hooks';
import { setTheme } from '../app/lib/store';

const ReduxTest: React.FC = () => {
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Redux Test</h2>
      <p className="mb-4">Theme: {theme}</p>

      <div className="space-x-2">
        <button
          onClick={() => dispatch(setTheme('dark'))}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Set Dark Theme
        </button>
        <button
          onClick={() => dispatch(setTheme('light'))}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Set Light Theme
        </button>
      </div>
    </div>
  );
};

export default ReduxTest;
