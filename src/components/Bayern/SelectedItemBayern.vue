<template>
<div class="button">
  <button class="margin-right" @click="setSelectedComponent('bayern-camisetas')">Camisetas</button>
  <button @click="setSelectedComponent('bayern-otras')">Más</button>
</div>
  <bayern-camisetas v-if="selectedComponent === 'bayern-camisetas'"></bayern-camisetas>
  <bayern-otras v-if="selectedComponent === 'bayern-otras'"></bayern-otras>
</template>

<script>

export default {
  data() {
    return {
      selectedComponent: 'bayern-camisetas'    
    }
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;

    }
  }
}

</script>

<style scoped>

button {
  border: 1px solid #e5e5e5;
  display: inline-block;
  padding: 10px 20px;
  color: #888;
  font-weight: 600;
  font-size: 14px;
  border-radius: 4px;
  transition: all .3s;
  border: 1px solid transparent;
  background: #424242;
  color: #fff;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
}

button:hover {
  background-color: #212121;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5)
}

.button {
    display: flex;
    justify-content: center;
}

</style>