// app/layout.tsx
"use"
import React, { useEffect, useState, ReactNode } from 'react';
import SplashScreen from './component/SplashScreen';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust this value to match the loading duration of the splash screen

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <html lang="en">
  
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;