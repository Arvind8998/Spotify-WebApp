// https:developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndPoint = "https://accounts.spotify.com/authorize";

//redirect to localhost redirect uri once logged on
const redirectUri = "http://localhost:3000/";

//client spotify unique id
const clientId = "9500a752f52c40109309963df6f708d0";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

/**
 if initial value present accumulator set to initial value and current points to 0th index item
 if initial value not present accumulator set to 0th index item and current points to 1st index item
**/ 

export const getTokenFromUrl = ()=>{
    return window.location.hash.substring(1).split('&').reduce((accumulator,current)=>{
    let parts = current.split('=')
    accumulator[parts[0]] = decodeURIComponent(parts[1])
    return accumulator
    },{})
}