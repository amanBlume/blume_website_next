"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useAuthRedirect = (redirectTo: string = '/auth') => {
  const router = useRouter();
  const isLoaded = true;
  const isSignedIn = false;

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push(redirectTo);
    }
  }, [isLoaded, isSignedIn, router, redirectTo]);

  return { isLoaded, isSignedIn };
};
