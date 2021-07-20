<template>
    <div class="rout-center">
        <router-link to="/argcamisetas">Camiseta</router-link>
        <router-link to="/argcamperas">Campera</router-link>
    </div>
</template>


<style scoped>
a {
  display: inline-block;
  padding: 10px 20px;
  color: #888;
  font-weight: 600;
  font-size: 14px;
  border-radius: 4px;
  transition: all .3s;
  border: 2px solid transparent;
  background: #424242;
  color: #fff;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  text-decoration: none;
}

a:hover {
  background-color: #212121;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  color: #fff;
}

a.active {
  border-color: #00509d;
  color: #fff;
}

.rout-center {
    display: flex;
    justify-content: center;
}
</style>