<script setup>

</script>

<template>
  <header>HEADER</header>
  <aside>
    <nav class="menu">
      <router-link to="/">PERGUNTAS</router-link>
      <router-link to="/about">ENTRADA</router-link>
    </nav>
  </aside>
  <main>

    <router-view />

  </main>
  <footer>FOOTER</footer>
</template>

<style scoped>

.menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

</style>
