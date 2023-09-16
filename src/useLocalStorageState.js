import { useEffect, useState } from "react";

export function useLocalStorageState(key) {
  const [value, setValue] = useState(() => {
    const watchedMovies = JSON.parse(localStorage.getItem(key));

    return watchedMovies || [];
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
