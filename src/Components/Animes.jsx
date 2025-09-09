import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import axios from "axios";
import Pagination from "./Pagination";

export default function Animes({handleWatch, handleRemoveWish,watchlist}) {
    const [anime, setAnime] = useState([]);
    const [page,setPage] = useState(1);

    const handleNext = () => {
        
        setPage(page+1)
    }

    const handlePrev = () => {
        if(page == 1){
            setPage(1)
        }else{
            setPage(page-1)
        }
    }

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime?page=${page}`)
      .then((res) => setAnime(res.data.data));
  }, [page]);

  return (
    <div className="p-5">
      <div className="text-center m-5 text-2xl text-bold">Trending Anime</div>
      <div className="flex gap-5 flex-wrap justify-around">
        {anime.map((obj) => {
          return (
            <AnimeCard
              key={obj.mal_id}
              poster={obj.images.jpg.large_image_url}
              title={obj.title}
              rating={obj.score}
              rank={obj.rank}
              fans={obj.members}
              handleWatch={handleWatch}
              animeObj={obj}
              handleRemoveWish={handleRemoveWish}
              watchlist = {watchlist}

            />
          );
        })}
      </div>
    <Pagination handleNext={handleNext} handlePrev={handlePrev} curPage={page}/>
    </div>
  );
}
