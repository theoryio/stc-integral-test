"use client";
import { UserProvider as UserContextProvider } from '@/containers/User'


interface UserProviderProps {
  children: React.ReactNode;
}

export default function UserProvider({ children }: UserProviderProps) {
  return (
    <UserContextProvider>
      {children}
    </UserContextProvider>
  );
}