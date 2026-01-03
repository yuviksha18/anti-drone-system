let threat = document.getElementById("threat");
let levels = ["LOW","MEDIUM","HIGH"];
let i = 0;

setInterval(()=>{
  threat.innerText = levels[i];
  threat.classList.remove("flash");

  if(levels[i] === "HIGH"){
    threat.classList.add("flash");
  }

  i = (i + 1) % levels.length;
},3000);