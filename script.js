let form1 = document.getElementById('main_form');
let form2 = document.getElementById('main_form2');
let form3 = document.getElementById('main_form3');


let add_bt_1 = document.getElementById('bt_1');
let add_bt_2 = document.getElementById('bt_2');
let bt_2_add = document.getElementById('bt_2_add');

let edu_clone = document.getElementById('edu_clone');   //внешний div в котором div`ы с данными

let edu_h1 = document.getElementById('edu_h1');         //заголовок для 1 образоательного учр

form2.classList.add('el_none');
form3.classList.add('el_none');
console.log(form1);

add_bt_1.onclick = function () {
    form2.classList.remove('el_none');
    add_bt_1.classList.add('el_none');
};

add_bt_2.onclick = function () {
    form3.classList.remove('el_none');
    add_bt_2.classList.add('el_none');
};

bt_2_add.onclick = add_edu;
function add_edu() {
    console.log("ADD");
    
    edu_h1.innerText = "Образовательное учреждение #1";
    let tmp = document.createElement('div');
    tmp.innerHTML = `
    <div class="educational_institution">
					<h1 id="edu_h1">Образовательное учреждение #2<h1>
				</div>
				<ul>
					<li><span>Уровень образования </span><input type="text" name="The_level_of_education"
							id="The_level_of_education" pattern="^[А-Яа-яЁё]+$"></li>
					<li><span>Учебное заведение </span><input type="text" name="Educational_institution"
							id="Educational_institution" pattern="^[А-Яа-яЁё]+$"></li>
					<li><span>Специализация </span><input type="text" name="Specialization" id="Specialization"
							pattern="^[А-Яа-яЁё]+$"></li>
					<li><span>Год окончания </span><input type="tel" pattern="[0-9]{4}" maxlength="4"
							name="Year_of_ending" id="Year_of_ending"></li>
				</ul>
`;
    edu_clone.append(tmp);
}