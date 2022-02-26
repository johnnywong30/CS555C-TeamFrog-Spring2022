import s1 from '../../constants/[MapleStory BGM] Aqua Dungeon Deep Sea.mp3'
import s2 from '../../constants/[MapleStory BGM] Coke Town.mp3'
import s3 from '../../constants/[MapleStory BGM] Ellinia Missing You.mp3'
import s4 from '../../constants/[MapleStory BGM] Ereve Raindrop Flower.mp3'
import s5 from '../../constants/[MapleStory BGM] Singapore Boat Quay Town.mp3'
import s6 from '../../constants/[MapleStory BGM] Happyville White Christmas.mp3'
import s7 from '../../constants/[MapleStory BGM] Maple Island First Step Master.mp3'
import s8 from '../../constants/[MapleStory BGM] Mu Lung Hill.mp3'
import s9 from '../../constants/[MapleStory BGM] Night Market.mp3'
import s10 from '../../constants/[MapleStory BGM] Orbis Upon the Sky.mp3'
import s11 from '../../constants/[MapleStory BGM] Rien Snow Drop.mp3'
const musicList = [s1, s2, s3 , s4, s5, s6, s7, s8, s9, s10, s11]
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