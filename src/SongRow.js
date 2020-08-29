import React from 'react'
import "./songrow.css"

function SongRow({track,playSong}) {
    return (
        <div className="songRow" onClick={()=>playSong(track.id)}>
            <img className="song_RowAlbum" src={track?.album?.images[0]?.url} alt=""/>
            <div className="song_RowInfo">
                <h1></h1>
                <p>{track?.artists?.map((artist)=>artist.name).join(",")}{track?.album?.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
