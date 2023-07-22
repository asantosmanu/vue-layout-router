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
        <button @click="$router.push({name: 'dica3'})"> Dica</button>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> OP4
        <button @click="$router.push({name: 'dica4'})"> Dica</button>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> OP5
        <button @click="$router.push({name: 'dica5'})"> Dica</button>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> OP6
        <button @click="$router.push({name: 'dica6'})"> Dica</button>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> OP7
        <button @click="$router.push({name: 'dica7'})"> Dica</button>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> OP8
        <button @click="$router.push({name: 'dica8'})"> Dica</button>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> OP9
        <button @click="$router.push({name: 'dica9'})"> Dica</button>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> OP10
        <button @click="$router.push({name: 'dica10'})"> Dica</button>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> OP11
        <button @click="$router.push({name: 'dica11'})"> Dica</button>
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

