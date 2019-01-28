<template>
  <select v-model="selected">
    <option v-for="(macro, index) in macros"
      :key="index"
      :value="index">{{ macro.name }}
    </option>
  </select>
</template>

<script>
import db from '@/assets/macros.json'

export default {
  data () {
    return {
      ...db,
      selected: db.macros[0]
    }
  },
  mounted () {
    console.log(db)
  },
  methods: {
  },
  watch: {
    selected (to, from) {
      console.log(from, to)
    }
  }
}
</script>

