
import { useCallback, useState, useEffect } from "react";

function useArrowFocus(rowMax: number, colMax: number) {
  const [currentFocusRow, setCurrentFocusRow] = useState(0);
  const [currentFocusCol, setCurrentFocusCol] = useState(0);

  const handleKeyDown = useCallback(
    e => {
      if (e.keyCode === 39) {
        // Right arrow
        e.preventDefault();
        setCurrentFocusCol(Math.min(currentFocusCol + 1, colMax));
      } else if (e.keyCode === 37) {
        // Left arrow
        e.preventDefault();
        setCurrentFocusCol(Math.max(currentFocusCol - 1, 0));
      } else if (e.keyCode === 40) {
        // Down arrow
        e.preventDefault();
        setCurrentFocusRow(Math.min(currentFocusRow + 1, rowMax));
      } else if (e.keyCode === 38) {
        // Up arrow
        e.preventDefault();
        setCurrentFocusRow(Math.max(currentFocusRow - 1, 0));
      }
    },
    [rowMax, colMax, currentFocusRow, setCurrentFocusRow, currentFocusCol, setCurrentFocusCol]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocusRow, setCurrentFocusRow, currentFocusCol, setCurrentFocusCol];
}

export default useArrowFocus;