import "./styles/styles.scss";

//import template from ".template/main.hbs";
import sumNumbers from "./js/utils.js";

const num1Input = document.querySelector('#num1');
const num2Input = document.querySelector('#num2');
const btn = document.querySelector('#sumBtn');

const result = document.getElementById('result');

btn.addEventListener('click', (e) => {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);

    result.innerHTML = sumNumbers(num1, num2)
})

console.log(sumNumbers(2, 3));