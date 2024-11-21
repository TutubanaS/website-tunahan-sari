<!-- src/components/Main.vue -->
<template>
  <div class="rectangle">
    <div class="name-title-container">
      <div class="name">Tunahan Sarı</div>
      <div class="title">
        Software & Machine Learning<br />
        Engineer
      </div>
    </div>
    <!-- Include the Header component -->
    <Header class="header-component" />
    <!-- Include router-view to display routed components inside the rectangle -->
    
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'Main',
  components: {
    Header,
  },
}
</script>

<style scoped>
.rectangle {
  /* Existing styles */
  position: relative;
  width: calc(1568 / 1728 * 100vw);
  height: calc(925 / 1117 * 100vh);
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  padding: 20px;
  border: 2px solid #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align items to the top */
  align-items: center;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 1;
}

.name-title-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  gap: 30px; /* Added gap */
}

.name {
  font-size: 52px;
  font-weight: 400; /* Less bold than default */
  text-align: left; /* Align text to the right if needed */
}

.title {
  font-size: 20px;
  font-weight: 200; /* Even less bold */
  text-align: left; /* Align text to the left if needed */
  
}

.rectangle::before {
  /* Existing styles */
  content: "";
  position: absolute;
  top: -100%;
  left: -100%;
  width: 300%;
  height: 300%;
  background: linear-gradient(0deg, #000000, #636363);
  animation: rotateGradient 10s linear infinite;
  z-index: -2;
}

@keyframes rotateGradient {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rectangle::after {
  /* Existing styles */
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 500px;
  opacity: 0.9;
  mix-blend-mode: color-burn;
  pointer-events: none;
  z-index: -1;
}

.header-component {
  margin-top: 30px;
}


</style>
