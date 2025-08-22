"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

// TODO: Import other providers as they are created
// import { ThemeProvider } from "@/components/providers/theme-provider";
// import { AuthProvider } from "@/components/providers/auth-provider";
// import { WebSocketProvider } from "@/components/providers/websocket-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // Create a new QueryClient instance for each session
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Retry failed requests 3 times
            retry: 3,
            // Refetch on window focus in development
            refetchOnWindowFocus: process.env.NODE_ENV === "development",
            // Stale time of 5 minutes
            staleTime: 5 * 60 * 1000,
            // Cache time of 10 minutes
            gcTime: 10 * 60 * 1000,
          },
          mutations: {
            // Retry failed mutations once
            retry: 1,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {/* TODO: Add other providers here */}
      {/* <ThemeProvider> */}
      {/* <AuthProvider> */}
      {/* <WebSocketProvider> */}
      
      {children}
      
      {/* </WebSocketProvider> */}
      {/* </AuthProvider> */}
      {/* </ThemeProvider> */}
      
      {/* React Query DevTools - only in development */}
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}
