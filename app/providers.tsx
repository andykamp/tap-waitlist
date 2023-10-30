"use client";

import { PropsWithChildren } from 'react';
import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Provider as WrapBalancerProvider } from 'react-wrap-balancer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: 'variable',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: 'variable',
  display: 'swap',
});

export default function Providers({ children }: PropsWithChildren) {

  return (
    <div className={`${inter.variable} ${jetBrainsMono.variable} font-sans`}>

      <NextThemeProvider attribute="class">
        <WrapBalancerProvider>
          {children}
        </WrapBalancerProvider>
      </NextThemeProvider>
    </div>

  )

}
