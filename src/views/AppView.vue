<template>
  <div id="appView">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/usuario">Usuário</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/teste">Teste</router-link> |
      <router-link to="/anotacao">Anotacao</router-link>
    </nav>
    <router-view/>
  </div>
</template>