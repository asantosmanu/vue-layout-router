<script setup>

</script>

<template>
  <h1>Perguntas</h1>
  <div class="opcao">
     <h2>perguntas AQUI</h2>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> OP1
        <button @click="$router.push({name: 'dica1'})"> Dica</button>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> OP2
        <button @click="$router.push({name: 'dica2'})"> Dica</button>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> OP3
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> OP4
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> OP5
       <hr>
        <button @click="$router.push({name: 'about'})">Ir para sobre</button>
  </div>
</template>

<style scoped>
.opcao {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>

