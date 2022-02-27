import s1 from '../../constants/aquadungeondeepsea.mp3'
import s2 from '../../constants/boatquaytown.mp3'
import s3 from '../../constants/coketown.mp3'
import s4 from '../../constants/ereveraindropflower.mp3'
import s5 from '../../constants/happyville.mp3'
import s6 from '../../constants/mapleislandfirststep.mp3'
import s7 from '../../constants/missingyou.mp3'
import s8 from '../../constants/mulunghill.mp3'
import s9 from '../../constants/nightmarket.mp3'
import s10 from '../../constants/snowdrop.mp3'
import s11 from '../../constants/uponthesky.mp3'
const musicList = [s1, s2, s3 , s4, s5, s6, s7, s8, s9, s10, s11]
console.log(musicList);
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
    volume: 1.0
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