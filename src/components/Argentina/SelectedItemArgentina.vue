<template>
<div class="button">
  <button class="margin-right" @click="setSelectedComponent('argentina-camisetas')">Camiseta</button>
  <button @click="setSelectedComponent('argentina-camperas')">Campera</button>
</div>
  <argentina-camisetas v-if="selectedComponent === 'argentina-camisetas'"></argentina-camisetas>
  <argentina-camperas v-if="selectedComponent === 'argentina-camperas'"></argentina-camperas>
</template>

<script>

export default {
  data() {
    return {
      selectedComponent: 'argentina-camisetas'    
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>