const app = document.getElementById("app");
app.style.position = "absolute";
app.style.left = 1300+'px';
app.style.top = 380+'px';
window.run = () => app.innerText="These membrane bound structures are called organelles";
app.innerHTML = '<button onclick="run()">Organelle Defination</button>';
