import React, {useEffect,useState} from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./Player"
import {useStateValue} from "./StateProvider"

const spotify = new SpotifyWebApi();

function App() {
const [{user,token},dispatch] = useStateValue();

/** Run code on condition 
  1st run when component is rendered 1st time 
  if variables added to useEfeect are present then it runs if variables changes 
**/
useEffect(() => {
  const hash = getTokenFromUrl();
  const _token = hash.access_token
  window.location.hash = ""

  if(_token){
    dispatch({
      type:"SET_TOKEN",
      token:_token
    })
    // setting token in spotify api pathway so we can interact with spotify api's
    spotify.setAccessToken(_token);
    // getting user info
    spotify.getMe().then(user=>{
      dispatch({
        type:'SET_USER',
        user:user
      })
    })

    spotify.getUserPlaylists().then((playlists)=>{
      dispatch({
        type: "SET_USER_PLAYLISTS",
        playlists: playlists
      })
    })

    spotify.getMyTopArtists().then(response=>{
      dispatch({
        type:"SET_TOP_ARTISTS",
        top_artists:response
      })
    })

    spotify.getPlaylist('6V0Anm5bFvRYQJNaKOHvue').then(response=>{
      dispatch({
        type:'SET_DISCOVER_WEEKLY',
        discover_weekly: response
      })
    })
  }
  
}, [])
return (
    <div className="App">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
