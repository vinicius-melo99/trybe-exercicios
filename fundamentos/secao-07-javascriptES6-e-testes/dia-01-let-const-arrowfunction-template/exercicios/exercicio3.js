const counter = document.querySelector("#click_counter");
const btn = document.querySelector("#click_here");
let clickCount = 0;

btn.addEventListener('click', () => {
    clickCount += 1;
    counter.innerHTML = clickCount;
});