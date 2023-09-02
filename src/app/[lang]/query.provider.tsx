"use client";
import { QueryClient, QueryClientProvider, } from 'react-query'

const queryClient = new QueryClient()

interface QueryProviderProps {
  children: React.ReactNode;
}

export default function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}