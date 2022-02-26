const fs = require('graceful-fs')
const musicList = fs.readdirSync('../../constants')

const getSong = (currentSong) => {
    let newSong = musicList[Math.floor(Math.random() * musicList.length)]
    while (currentSong === newSong) {
        newSong = musicList[Math.floor(Math.random() * musicList.length)]
    }
    return newSong
}

const INIT_STATE = {
    playing: false,
    source: '',
    volume: 0.5
}

const musicReducer = (state = INIT_STATE, action) => {
    const {type, payload} = action
    switch (type) {
        case "PLAY_MUSIC":
            return {
                ...state,
                source: getSong(state.source)
            }
        case "PAUSE_MUSIC":
            return {
                ...state,
                playing: false
            }
        case "INCREASE_MUSIC":
            return {
                ...state,
                volume: (state.volume + 0.1)
            }
        case "DECREASE_MUSIC":
            return {
                ...state,
                volume: (state.volume - 0.1)
            }
        case "CHANGE_MUSIC":
            return {

            }
        default:
            return state
    }
}

export default musicReducer;