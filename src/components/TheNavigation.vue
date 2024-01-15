<template>
        <div class="left">
            <div class="logo">  logo    </div>
            <div class="rutas">
            <nav>
                <ul>
                <li><router-link to="/" class="router-link">Home</router-link></li>
                <li><router-link to="/about" class="router-link">About</router-link></li>
                <li><router-link to="/contact" class="router-link">Contact</router-link></li>
                </ul>
            </nav>
            </div>
        </div>
</template>

<script>
export default {
    name: 'TheNavigation'
}
</script>

<style>

.container {
  display: grid;
  grid-template-columns: 0.25fr 1fr;
  height: 100vh;
  margin: 0;
}

.left {
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0; 
}
.logo {
  margin-top: 20px;
  width: 150px;
  height: 80px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.logo:hover {
  background-color: rgb(247, 228, 228);
}

.rutas {
  margin-top: 20px;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav li {
  margin-bottom: 10px; 
}

.router-link {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  transition: color 0.3s;
}

.router-link:hover {
  color: #f00; 
}

</style>