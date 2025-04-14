import { useState, useEffect } from "react";

// Định nghĩa interface cho đối tượng kích thước cửa sổ
interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

export default function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Hàm cập nhật kích thước cửa sổ
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    // Cập nhật kích thước ban đầu
    handleResize();

    // Cleanup khi component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
