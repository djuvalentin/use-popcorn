import { useState, useEffect } from "react";

const KEY = "19f1a47c";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        if (query.length < 3) {
          setMovies([]);
          setError("");
          return;
        }

        const res = await fetch(
          `http://www.omdbapi.com/?s=${query}&apikey=${KEY}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();

        const searchResults = data.Search;
        if (!searchResults) throw new Error("Movie not found!");

        setMovies(searchResults);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err.message);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();

    return function () {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}
