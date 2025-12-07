import React from "react";
import playlist from "../../data/plalist.json"
import PlaylistCom from "../smallcom/PlaylistCom";


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
