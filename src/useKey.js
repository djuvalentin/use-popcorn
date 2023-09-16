import { useEffect } from "react";

export function useKey() {
  useEffect(() => {
    const callback = function () {
      onCloseMovie();
    };

    document.addEventListener("keydown", callback);

    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, [onCloseMovie]);
}
