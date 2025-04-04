import { useEffect, useState } from "react";

interface WindowSize_t {
  height: number;
  width: number;
}

/**
 * Gets current height and width of window; should only be called once per page
 * @returns window height and width
 * @example const {height, width} = useWindowSize();
 */
export const useWindowSize = (): WindowSize_t => {
  const [windowSize, setWindowSize] = useState<WindowSize_t>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
