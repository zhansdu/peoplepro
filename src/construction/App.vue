<template>
  <div class="bgimg">
    <div class="topleft">
      <img
        src="@/landing/assets/images/logo_dark.png"
        alt=""
      >
    </div>
    <div class="middle">
      <h1>
        COMING SOON
      </h1>
      <hr style="margin-bottom:30px;">
      <a href="/construction">
        See progress
      </a>
    </div>
    <div class="bottomleft">
      <p>People pro</p>
    </div>
  </div>
</template>
<style>
body, html,#app {
  height: 100%;
  margin: 0;
}

.bgimg {
  background-image: url('https://www.w3schools.com/w3images/forestbridge.jpg');
  height: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
}

.topleft {
  position: absolute;
  top: 0;
  left: 16px;
}

.bottomleft {
  position: absolute;
  bottom: 0;
  left: 16px;
}

.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

hr {
  margin: auto;
  width: 40%;
}

.middle > a{
  text-decoration: none;
  color:white;
  padding:15px;
  border:1px solid white;
  border-radius: 5px;
  transition:.3s;
}
.middle > a:hover{
  color:black;
  background-color: white;
  font-weight: bold;
}
</style>
