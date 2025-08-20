import React from 'react';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center mt-16">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black" />
  </div>
);

export default LoadingSpinner;
