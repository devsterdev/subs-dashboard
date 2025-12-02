import React from "react";
import PlaylistCom from "../components/PlaylistCom";
import playlist from "../data/plalist.json";

const Playlist = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4 w-full justify-center">
        {playlist.map((e, index) => {
          return (
            <PlaylistCom
              index={index + 1}
              title={e.title}
              author={e.author}
              videos={e.videos}
              link={e.link}
            />
          );
        })}
      </div>
    </>
  );
};

export default Playlist;
