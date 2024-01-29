import React, { useEffect, useState } from "react";

/**
 * Solution
 * Use custom hooks to follow DRY principle
 */
const useWidowSize = () => {
  const [windowSize, setWindowSize] = useState(1920);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSizeChange);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return windowSize;
};

export const TextComponent1 = () => {
  const windowSize = useWidowSize();
  return <div>{windowSize}</div>;
};

export const TextComponent2 = () => {
  const windowSize = useWidowSize();
  return <div>{windowSize}</div>;
};
