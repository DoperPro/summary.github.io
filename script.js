let form1 = document.getElementById('main_form');
let form2 = document.getElementById('main_form2');
let form3 = document.getElementById('main_form3');


let add_bt_1 = document.getElementById('bt_1');
let add_bt_2 = document.getElementById('bt_2');


form2.classList.add('el_none');
form3.classList.add('el_none');
console.log(form1);

add_bt_1.onclick = function() {
    form2.classList.remove('el_none');
    add_bt_1.classList.add('el_none');
  };
  
add_bt_2.onclick = function() {
    form3.classList.remove('el_none');
    add_bt_2.classList.add('el_none');
  };
