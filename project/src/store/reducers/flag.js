import { SET_FLAG,SET_MODEL } from "../actionTypes"

const initState = {
    flag: {
        theme: "light",
        checked1: "true",
        checked2: "false",
        isSwitch: "false",
    },
    model: {
        Terms_main: "false",
        Privacy_main:"false"
    }
}

export const flagReducer = (state = initState, action) => {
    const { type, payload = 1 } = action
    switch (type) {
        case SET_FLAG:
            return { ...state, flag: payload }
        case SET_MODEL:
            return { ...state, model: payload }
        default:
            return state
    }
}