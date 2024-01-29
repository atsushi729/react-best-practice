import React, { useEffect, useState } from "react";

export const TextComponent1 = () => {
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

  return <div>TextComponent1</div>;
};

export const TextComponent2 = () => {
  /**
   * Issue:
   * Repeating the useEffect hook in every component isn't ideal, as it leads to higher maintenance costs and violates the DRY (Don't Repeat Yourself) principle.
   *
   * Proposed Solution:
   * See 'after.jsx' for a more efficient approach.
   *
   */
  const [windowSize, setWindowSize] = useState(1920);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSizeChange);

    // Ensures event listener is removed to prevent memory leaks
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return <div>TextComponent2</div>;
};
