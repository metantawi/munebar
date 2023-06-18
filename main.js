// [1] كود تعداد الارقام عند الوصول للقسم

let nums = document.querySelectorAll(".nums .num")
let sec = document.querySelector(".three")
let started = false;


window.onscroll = function () {
  if (window.scrollY >= sec.offsetTop) {
    if (!started) {
        nums.forEach((num) => startcount(num))
    }
    started = true
  }
}

function startcount (el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
  el.textContent++;
  if (el.textContent === goal) {
    clearInterval(count)
  }
  }, 2000 / goal)
}

// --------------------------------------------

// [2] عند النزول للقسم شريط الخبرات يتملي بنسبه محدده


let sectio = document.querySelector(".four")
let spans = document.querySelectorAll(".progress span")

window.onscroll = function () {
  if (window.scrollY >= sectio.offsetTop) {
    console.log("forrrrr")
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    })
  }
}


// --------------------------------------------

// [3] عند النزول لقسم يظهر زرار الطلوع لفوق ويختفي

let elment = document.querySelector(".up")

window.onscroll = function () {
  if (this.scrollY >= 2000) {
    elment.style.display = ("block")
  }
  else {
  elment.style.display = ("none")
  }
}

elment.onclick = function () {
  window.scrollTo({
    top:0,
    behavior: "smooth",
  })
}

// --------------------------------------------

// [4] تعداد تاريخ معين

// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

let down = new Date("Dec 31, 2023 23:59:59").getTime()

let counter = setInterval(() => {
    // Get Date Now
  let dataNow = new Date().getTime()

    // Find The Date Difference Between Now And Countdown Date
  let datadiff = down - dataNow

    // Get Time Units
  let days = Math.floor(datadiff / (1000 * 60 * 60 * 24 ))
  let hours = Math.floor((datadiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) 
  let minuts = Math.floor((datadiff % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((datadiff % (1000 * 60)) / (1000))


  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours
  document.querySelector(".minutes").innerHTML = minuts < 10 ? `0${minuts}` : minuts
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds

  if (datadiff < 0) {
  clearInterval(counter)
}
}, 1000);


// --------------------------------------------

// [5] منيو بار بتفتح وتقفل

let toogler  = document.querySelector(".toogle")
let nav  = document.querySelector("nav")
let close  = document.querySelector(".close")

toogler.onclick = function () {
  nav.classList.add("open")
}

close.onclick = function () {
  this.parentElement.classList.remove("open")
}

// عند الضغط علي زرار محدد من الكيبورد اقفلي الويندو
document.onkeyup = function (e) {
    // console.log(e);
  if (e.key === "s") {
    nav.classList.remove("open");
  }
};


// --------------------------------------------

// [6] منيو بار بتفتح وتقفل

