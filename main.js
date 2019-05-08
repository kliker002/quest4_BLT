// [0] - буква
// [1] - цифра
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var number = [1, 2, 3, 4, 5, 6, 7, 8];
var response = []; // массив хранимый ответ в результате работы ф-ций
var prev_button = null;


function main(html_element) {
    var letter = html_element.className[0].toLowerCase(); // получает символ
    var index_letter = letters.indexOf(letter); 
    vertical_check(html_element.className, index_letter);
    horizontal_check(html_element.className, index_letter);
    for(resp in response){

        answer = document.getElementsByClassName(response[resp].toUpperCase());
        answer[0].style.backgroundColor = 'green';
    }
    response = [];


}
function vertical_check(ask_input, index_letter) {
    var result_num = 0;

    if (parseInt(ask_input[1]) + parseInt('2') <= number[number.length - 1]) { //осуществляется проверка на выход за пределы


        if (index_letter + parseInt(1) < letters.length) {
            response.push(letters[index_letter + 1] + (parseInt(ask_input[1]) + parseInt('2')));
        }
        if (index_letter - parseInt(1) >= 0) {
            response.push(letters[index_letter - 1] + (parseInt(ask_input[1]) + parseInt('2')));
        }

    }
    if (parseInt(ask_input[1]) - parseInt('2') > 0) { //осуществляется проверка на выход за пределы
        if (index_letter + parseInt(1) < letters.length) {
            response.push(letters[index_letter + 1] + (parseInt(ask_input[1]) - parseInt('2')));
        }
        if (index_letter - parseInt(1) >= 0) {
            response.push(letters[index_letter - 1] + (parseInt(ask_input[1]) - parseInt('2')));
        }
    }
}
function horizontal_check(ask_input, index_letter) {
    numOnDesc = ask_input[1]
    if (parseInt(index_letter) - parseInt('2') >= 0) { //осуществляется проверка на выход за пределы
        if (parseInt(numOnDesc) + parseInt('1') < number.length) {
            ;
            response.push(letters[index_letter - 2] + (parseInt(numOnDesc) + 1))
        }
        if (parseInt(numOnDesc) - parseInt('1') > 0) {
            response.push(letters[index_letter - 2] + (parseInt(numOnDesc) - 1));
        }
    }
    if (parseInt(index_letter) + parseInt('2') < letters.length) { //осуществляется проверка на выход за пределы
        if (parseInt(numOnDesc) + parseInt('1') < number.length) {
            response.push(letters[index_letter + 2] + (parseInt(numOnDesc) + 1));
        }
        if (parseInt(numOnDesc) - parseInt('1') > 0) {
            response.push(letters[index_letter + 2] + (parseInt(numOnDesc) - 1));
        }
    }
}
function updateDesc() { // Очистка доски на дефолтные цвета

    var parent = document.querySelector('.container');
    var notes = null;
    for (var i = 0; i < parent.children.length; i++) {
        notes = parent.children[i];
        if (notes.classList.value.length === 2) {

            if ((parseInt(letters.indexOf(notes.classList.value[0].toLowerCase()) +
            number.indexOf(parseInt(notes.classList.value[1])))) % 2 == 0) {
                notes.style.backgroundColor = 'black';
                }else {
                    notes.style.backgroundColor = 'white';
                }
        }

    }
}
document.getElementById('container').onclick = function (event) { // посредством делегирования отслеживаем нажатие
    updateDesc();
    var target = event.target;
    target.style.backgroundColor = 'blue';

    prev_button = target;
    main(target);

}