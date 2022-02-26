import test from '../../constants/[MapleStory BGM] Aqua Dungeon Deep Sea.mp3'
const musicList = [test]
console.log(musicList)
console.log("hi");

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
                playing: true,
                source: getSong(state.source)
            }
        case "PAUSE_MUSIC":
            return {
                ...state,
                playing: false
            }
        case "UNPAUSE_MUSIC":
            return {
                ...state,
                playing: true
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
                ...state,
                playing: true,
                source: getSong(state.source)
            }
        default:
            return state
    }
}

export default musicReducer;