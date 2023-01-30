import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';

export default function ProtectedRoute({ children, requireAdmin }) {
  const { isAdmin } = useAuthContext();

  if (requireAdmin && !isAdmin) {
    console.log('어드민이냐?', isAdmin);
    return <Navigate to="/" replace />;
  }

  return children;
}
