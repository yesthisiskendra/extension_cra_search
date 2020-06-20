import { useEffect, useState } from "react";
const useAsyncHook = (searchPost) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    async function fetchPostList() {
      try {
        setLoading("true");
        const response = await fetch(
          `https://www.reddit.com/r/${searchPost}.json`
          //   `https://www.googleapis.com/Posts/v1/volumes?q=${searchPost}`
        );

        const json = await response.json();
        console.log(json.data.children);
        setResult(
          json.data.children.map((child) => {
            console.log(child);
            // console.log(item.volumeInfo.title);
            // return item.volumeInfo.title;
            return child.data;
          })
        );
      } catch (error) {
        setLoading("null");
      }
    }

    if (searchPost !== "") {
      fetchPostList();
    }
  }, [searchPost]);

  return [result, loading];
};

export default useAsyncHook;
