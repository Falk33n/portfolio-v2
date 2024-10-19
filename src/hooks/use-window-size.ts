'use client';

import React from 'react';

type WindowSizeProps = {
  width?: number;
  height?: number;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState<WindowSizeProps>({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    if (typeof window === undefined) return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
