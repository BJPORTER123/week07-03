import React from "react";

const SongItem = ({song}) => {



    return (
        <div className="song-list">
            <li>
                Artist: {song["im:artist"]["label"]}
                Song: {song["im:name"]["label"]}
            </li>
        </div>
    )
}

export default SongItem;