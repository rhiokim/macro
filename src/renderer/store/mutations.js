
const START_MACRO = (state) => {
  state.working = true
}

const STOP_MACRO = (state, info) => {
  state.working = false
}

export default {
  START_MACRO,
  STOP_MACRO
}
