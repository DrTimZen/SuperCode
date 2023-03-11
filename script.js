"use strict";

const body = document.getElementById("body");
const input = document.getElementById("input");
const button = document.getElementById("button");
const alarm = document.getElementById("alarm");
const fail = document.getElementById("fail");

button.addEventListener("click", function (e) {
  e.preventDefault();

  const number = input.value;
  if (number === "777") {
    console.log("hi");
    alarm.play();
    body.style.backgroundColor = "green";
  } else {
    fail.play();
    body.style.backgroundColor = "red";
  }
});
