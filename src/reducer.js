export const initialState = {
    playing:false,
    item: false,
    user:null,
    playlist: [],
    top_artists: null,
    token: null
}

const reducer = (state,action)=>{
    switch(action.type){
        case 'SET_USER':
            return {...state,user:action.user}
            break;
        case 'SET_TOKEN':
            return {...state,token:action.token}
            break;
        case 'SET_USER_PLAYLISTS':
            return {...state, playlists:action.playlists}
        break;
        case  'SET_DISCOVER_WEEKLY':
            return {...state, discover_weekly:action.discover_weekly}
            break;
        case 'SET_ITEM':
            return {...state, item:action.item}
            break;
        case 'SET_PLAYING':
            return {...state,playing:action.playing}
            break;
        case 'SET_TOP_ARTISTS':
            return {...state, top_artists:action.top_artists}
        default:
            return state
    }
}

export default reducer