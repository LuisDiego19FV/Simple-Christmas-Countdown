import ReactDOM from "react-dom";
import React, { Component } from "react";

// tiempos para navidad
var countDownDate = new Date("Dec 25, 2019 00:00:00").getTime();

// booleanos para primera animacion
var first_time_minutes = true;
var first_time_hours = true;
var first_time_days = true;

// foto navideña
const navidad = <img src={require('../resources/christmas.png')} alt="navidad" id="navidad"></img>;
const snow1 = <img src={require('../resources/snow.png')} alt="snow" id="snow1"></img>;
const snow2 = <img src={require('../resources/snow.png')} alt="snow" id="snow2"></img>;
const snow3 = <img src={require('../resources/snow.png')} alt="snow" id="snow3"></img>;
const snow4 = <img src={require('../resources/snow.png')} alt="snow" id="snow4"></img>;
const snow5 = <img src={require('../resources/snow.png')} alt="snow" id="snow5"></img>;
const snow6 = <img src={require('../resources/snow.png')} alt="snow" id="snow6"></img>;


// funcion llamada cada segundo para contar el tiempo
var counter_till_christmas = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days_left").innerHTML = days;
  document.getElementById("hours_left").innerHTML = hours;
  document.getElementById("minutes_left").innerHTML = minutes;
  document.getElementById("seconds_left").innerHTML = seconds;

  if (first_time_minutes){
    if (seconds === 0){
      document.getElementById("mins_timer").style.webkitAnimationPlayState  = "running";
      document.getElementById("mins_timer").style.animationPlayState  = "running";
      first_time_minutes = false;
    }
  }

  if (first_time_hours){
    if (minutes === 0 && seconds === 0){
      document.getElementById("hours_timer").style.webkitAnimationPlayState  = "running";
      document.getElementById("hours_timer").style.animationPlayState  = "running";
      first_time_hours = false;
    }
  }

  if (first_time_days){
    if (hours === 0 && minutes === 0 && seconds === 0){
      document.getElementById("days_timer").style.webkitAnimationPlayState  = "running";
      document.getElementById("days_timer").style.animationPlayState  = "running";
      first_time_days = false;
    }
  }

  if (distance < 0) {
    countDownDate = new Date("Dec 25, 2020 00:00:00").getTime();
  }
}, 1000);

class App extends Component{
  render(){
    return(
      <div>
        <div id="days" class="time_container">
          <p class="time_names"> DAYS </p>
          <div class="timer" id="days_timer">
            <p id="days_left" class="left">000</p>
            <div class="line_divider"></div>
          </div>
        </div>
        <div id="hours" class="time_container">
          <p class="time_names"> HOURS </p>
          <div class="timer" id="hours_timer">
            <p id="hours_left" class="left">00</p>
            <div class="line_divider"></div>
          </div>
        </div>
        <div id="minutes" class="time_container">
          <p class="time_names"> MINS </p>
          <div class="timer" id="mins_timer">
            <p id="minutes_left" class="left">00</p>
            <div class="line_divider"></div>
          </div>
        </div>
        <div id="seconds" class="time_container">
          <p class="time_names"> SECS </p>
          <div class="timer">
            <p id="seconds_left" class="left">00</p>
            <div class="line_divider"></div>
          </div>
        </div>
        {navidad}
        {snow1}
        {snow2}
        {snow3}
        {snow4}
        {snow5}
        {snow6}
      </div>
    )
  }
}

ReactDOM.render(<App/>,  document.getElementById("app"));
