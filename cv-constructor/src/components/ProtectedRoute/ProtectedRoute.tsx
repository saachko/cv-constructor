import React from 'react';

interface ProtectedProps {
  conditionValue: boolean | null,
  children: JSX.Element,
}

function ProtectedRoute({ conditionValue, children }: ProtectedProps) {
  if (!conditionValue) {
    return (
      <p>Please log in</p>
    );
  }
  return children;
}

export default ProtectedRoute;
