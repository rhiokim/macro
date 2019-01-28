import robot from 'robotjs'

let __pool = {}

const keyTap = (key, period) => {
  function repeat () {
    let tid = setTimeout(() => {
      robot.keyTap(key)
      repeat()
    }, period)

    __pool[key] = tid
  }

  robot.keyTap(key)
  repeat()
}

export {
  keyTap
}
