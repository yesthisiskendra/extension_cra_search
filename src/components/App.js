import React, { useState } from "react";
import "./App.css";
import useAsyncHook from "../hooks/useAsyncHook";

const App = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [result, loading] = useAsyncHook(query);
  return (
    <div className="App">
      <h1>Search Any Subreddit for Titles and/or Images</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(search);
        }}
      >
        <label>Search : </label>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <input type="submit" value="search" />
      </form>

      {loading === "false" ? (
        <h3>Try something like 'aww' or 'catsstandingup'</h3>
      ) : loading === "null" ? (
        <h1>No Subreddit found</h1>
      ) : (
        result.map((item) => {
          return (
            <p>
              <h3>
                <a href={item.url} target="_blank">
                  {item.title}
                </a>
              </h3>
              {item.thumbnail.includes("http") && (
                <img src={item.thumbnail} alt={item.title} />
              )}
            </p>
          );
        })
      )}
    </div>
  );
};

export default App;
