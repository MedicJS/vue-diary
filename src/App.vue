<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style>
html {
	background-image: linear-gradient(rgb(250, 150, 80), rgb(160, 15, 204));
	background-attachment: fixed;
	height: 100%;
}
#app {
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}

/* Scrollbar Start */
body {
	scroll-behavior: smooth;
	overflow-y: auto;
}
body::-webkit-scrollbar {
	width: 10px;
}
body::-webkit-scrollbar-track {
	background-image: linear-gradient(rgb(250, 150, 80), rgb(160, 15, 204));
}
body::-webkit-scrollbar-thumb {
	background: rgb(44, 62, 80);
	border-radius: 8px;
}
body::-webkit-scrollbar-thumb:hover {
	background: rgb(64, 82, 100);
}
/* Scrollbar End */
</style>
