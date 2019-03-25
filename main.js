'use strict';

const display = document.querySelector('#res');
const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btnClr = document.querySelector('#btnClr');
const btnEql = document.querySelector('#btnEql');
const btnSum = document.querySelector('#btnSum');
const btnSub = document.querySelector('#btnSub');
const btnMul = document.querySelector('#btnMul');
const btnDiv = document.querySelector('#btnDiv');
const btns = [btn0, btn1, btnSum, btnSub, btnMul, btnDiv];

//  Output Result
function solution() {
  let result = display.innerText.match(/\d+\W\d+(\W\d+)*/g);
  if (result && result[0] === display.innerText) {
    //  Convert the first match in the array to a seperate array and covert all numbers to base 10
    result = result[0]
      .replace(/\W/, ' $& ')
      .split(' ')
      .map((x) => {
        if (!isNaN(Number(x))) {
          return parseInt(x, 2);
        } else {
          return x;
        }
      })
      //Covert Base 10 numbers to String;
      .map((x) => {
        if (!isNaN(Number(x))) {
          return String(x);
        } else {
          return x;
        }
      });

    //Use the eval function to calculate the string and convert the result back to binary
    display.innerText = eval(result.join(' ')).toString(2);
  } else {
    display.innerText = 'Err';
  }
}

//  Add Click Event Listeners
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    display.append(btn.innerHTML);
  });
});

btnClr.addEventListener('click', () => {
  display.innerHTML = '';
});

btnEql.addEventListener('click', () => {
  solution();
});

//Add Keypress Event Listeners for Numeric and Arithmetic Buttons
document.onkeydown = (e) => {
  // DISPLAY RESULT WHEN ENTER KEY IS PRESSED
  if (e.keyCode == 13) {
    solution();
  } else if (e.key == 'Backspace') {
    display.innerText = '';
  }
  btns.forEach((btn) => {
    if (btn.innerHTML == e.key) {
      display.append(btn.innerHTML);
    }
  });
};
