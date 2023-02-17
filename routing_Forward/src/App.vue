<template>
  <RouterLink to="/" >Home</RouterLink>
  <br>
  <RouterLink to="/About" >About</RouterLink>
  <br>
  <RouterLink to="/Login" >Login</RouterLink>
  <br>
  <RouterLink to="/Profile" >Profile</RouterLink>
  <br>
  <br>
  <br>
  <RouterLink to="/Profile/Talha" >Talha</RouterLink>
  <br>
  <RouterLink to="/Profile/Hassan" >Hassan</RouterLink>
  <br>
  <RouterLink to="/Profile/Awais" >Awais</RouterLink>


  <RouterView>

  </RouterView>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

