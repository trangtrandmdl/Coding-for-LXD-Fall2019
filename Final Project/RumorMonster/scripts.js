let start_btn = document.querySelector('#start-btn');
let cockroach_btn = document.querySelector('#cockroach-btn');
let brain_damage_btn = document.querySelector('#brain-damage-btn');
let points_span = document.querySelector('#points');
let try_again_btn = document.querySelector('#try-again');
let restart_btn = document.querySelector('#restart-btn');


let start_game = () => {
  points_span.innerHTML = Number(points_span.innerHTML) + 300;
}
let cockroach_option = () => {
  points_span.innerHTML = Number(points_span.innerHTML)+1000;
}

let brain_damage_option = () =>{
  points_span.innerHTML = Number(points_span.innerHTML)+500;
}

let try_again = () => {
  points_span.innerHTML = Number(points_span.innerHTML)-100;

}

let restart_game = () => {
  points_span.innerHTML = 0;
}

cockroach_btn.addEventListener('click', cockroach_option);
brain_damage_btn.addEventListener('click', brain_damage_option);
try_again_btn.addEventListener('click', try_again);
start_btn.addEventListener('click', start_game);
restart_btn.addEventListener('click', restart_game);
