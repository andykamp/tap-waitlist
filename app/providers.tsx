"use client";

import { PropsWithChildren } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { Provider as WrapBalancerProvider } from 'react-wrap-balancer';

export default function Providers({ children }: PropsWithChildren) {
  return (
      <NextThemeProvider attribute="class">
        <WrapBalancerProvider>
          {children}
        </WrapBalancerProvider>
      </NextThemeProvider>
  )
}
