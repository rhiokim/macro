<template>
  <div>
    <select v-model="selectedIdx">
      <option v-for="({ name }, index) in macros"
        :key="index"
        :value="index">{{ name }}
      </option>
    </select>
    <form>
      <fieldset v-for="({ accelerator, repeat }, index) in macros[selectedIdx].keys"
          :key="index">
        <legend>keyboard:</legend>
        <label>
          <input type="text" name="" :value="accelerator" readOnly/>
          <input type="text" name="" :value="repeat.period" />ms
        </label>
      </fieldset>
    </form>
    <form>
      <label>
        <span>start key</span>
        <input type="text" name="" value="F5" />
      </label>
      <label>
        <span>end key</span>
        <input type="text" name="" value="F6" />
      </label>
    </form>
    <button @click="onStart">start</button>
    <button @click="onStop">stop</button>
    <button @click="onToggleAlwaysOnTop">Toggle alwaysOnTop</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import db from '@/assets/macros.js'

export default {
  data () {
    return {
      ...db,
      selectedIdx: 0
    }
  },
  computed: {
    selectedMacro () {
      const { macros, selectedIdx } = this
      return macros[selectedIdx]
    }
  },
  mounted () {
    console.log(db)

    this.$electron.ipcRenderer.on('keypress', (event, message) => {
      switch (message) {
        case 'start':
          this.startMacro(this.selectedMacro)
          break
        case 'end':
          this.stopMacro()
          break
      }
    })
  },
  methods: {
    ...mapActions(['startMacro', 'stopMacro']),
    onStart () {
      this.startMacro(this.selectedMacro)
    },
    onStop () {
      this.stopMacro()
    },
    onToggleAlwaysOnTop () {
      const win = this.$electron.remote.getCurrentWindow()
      win.setAlwaysOnTop(!win.isAlwaysOnTop())
      // window.electron = this.$electron
      // console.log(this.$electron)
    }
  },
  watch: {
    selected (to, from) {
      console.log(from, to)
    }
  }
}
</script>

<style scoped>
  label {
    display: block;
  }
</style>
