import React,{useState, useEffect} from "react";
import SongItem from "../components/SongItem";
import ListSongs from "../components/ListSongs";

const ChartBox = () =>{
    const [songs, setSongs] = useState([]);

    useEffect(() =>{
        getSongs();
    },[])


    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(response => response.json())
        .then(songs => setSongs(songs["feed"]["entry"]))
    }


    return (
        <div className="main-container">
            <ListSongs songs={songs}/>
        </div>
    )
}

export default ChartBox

