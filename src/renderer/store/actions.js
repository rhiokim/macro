import robot from 'robotjs'

let __pool = []

function interval (idx, key, period) {
  __pool[idx] = setTimeout(() => {
    robot.keyTap(key)
    interval(idx, key, period)
  }, period)
}

const startMacro = (context, { keys, mouse }) => {
  context.commit('START_MACRO')

  console.log(keys, mouse)
  keys.forEach(({ accelerator, repeat }, idx) => {
    // keyTap(accelerator)
    interval(idx, accelerator, repeat.period)
    robot.keyTap(accelerator)
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
