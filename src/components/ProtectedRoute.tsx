"use client"
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthContext from './AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [router]);

  return isLoggedIn ? children : null;
};

export default ProtectedRoute;