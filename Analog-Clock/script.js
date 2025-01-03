let body = document.querySelector("body");
let hourHand = document.querySelector(".hour");
let minuteHand = document.querySelector(".minute");
let secondHand = document.querySelector(".second");
let switchMode = document.querySelector(".switch-mode");


if(localStorage.getItem("mode") === "Dark Mode"){

    body.classList.add("dark");
    switchMode.textContent = "Light Mode";

}

switchMode.addEventListener('click',()=>{
    body.classList.toggle("dark");
    const isDarkMode = body.classList.contains("dark");
    switchMode.textContent = isDarkMode? "Light Mode" : "Dark Mode";

    localStorage.setItem("mode",isDarkMode? "Dark Mode" : "Light Mode");
    
})


const updateTime = () => {
  let date = new Date(),

secTime = date.getSeconds(),
minTime = date.getMinutes(),
hrTime = date.getHours();


sRotation = 6*secTime;
mRotation = 6*minTime;
hRotation = 30*hrTime + minTime/2;




    // secToDeg = (date.getSeconds() / 60) * 360,
    // minToDeg = (date.getMinutes() / 60) * 360,
    // hrToDeg = (date.getHours() / 12) * 360;

  secondHand.style.transform = `rotate(${sRotation}deg)`;
  minuteHand.style.transform = `rotate(${mRotation}deg)`;
  hourHand.style.transform = `rotate(${hRotation}deg)`;
};

setInterval(updateTime, 1000);
