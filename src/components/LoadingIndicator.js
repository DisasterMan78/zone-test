import React from 'react';

const LoadingIndicator = () => (
  <div
    className="loading-indicator"
  >
    <h4 className="loading-indicator__title">
      Loading
    </h4>
    <div
      className="loading-indicator__ellipsis"
    >
      <div
        className="loading-indicator__dot"
      />
      <div
        className="loading-indicator__dot"
      />
      <div
        className="loading-indicator__dot"
      />
      <div
        className="loading-indicator__dot"
      />
    </div>
  </div>
);

export default LoadingIndicator;
