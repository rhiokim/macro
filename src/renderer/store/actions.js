import robot from 'robotjs'

let __pool = []

function interval (idx, key, period) {
  __pool[idx] = setTimeout(() => {
    robot.keyTap(key)
    interval(idx, key, period)
  }, period)

  robot.keyTap(key)
}

const startMacro = (context, { keys, mouse }) => {
  context.commit('START_MACRO')

  keys.forEach(({ accelerator, repeat }, idx) => {
    // keyTap(accelerator)
    interval(idx, accelerator, repeat.period)
  })
}

const stopMacro = (context, payload) => {
  __pool.forEach(tid => {
    clearTimeout(tid)
  })
  __pool.length = 0
  context.commit('STOP_MACRO')
}

export default {
  startMacro,
  stopMacro
}
