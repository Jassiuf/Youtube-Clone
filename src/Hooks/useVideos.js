import React, { useEffect, useState } from "react";
import youtube from "../API/youtube";

const useVideos = (term) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(term);
  }, []);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
