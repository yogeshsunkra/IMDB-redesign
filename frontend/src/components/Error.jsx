import React from 'react'

const Error = ({ onRetry , className="" }) => {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center py-16 text-center bg-dark-5/20 ${className}`}>
      <h2 className="text-xl font-semibold">Something went wrong</h2>

      <p className="mt-2 text-gray-400">
        Please try again.
      </p>

      <button
        onClick={onRetry}
        className="mt-4 rounded bg-yellow-400 px-4 py-2 text-black"
      >
        Retry
      </button>
    </div>
  );
};

export default Error;