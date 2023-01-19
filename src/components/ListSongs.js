import React from "react"
import SongItem from "./SongItem"

const ListSongs = ({songs}) => {

    const songItemList = songs.map((song) => {
        return <SongItem song={song}/>
      
      })
    return (
        <div className="song-item">
            <ul>
                {songItemList}
            </ul>
        </div>
    )
}

export default ListSongs;
