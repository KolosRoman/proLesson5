let operation;
let next;
let result;
let array = [];

do {
    do {
    operation = prompt(`Вкажіть математичну дію:
    додавання введіть - sum, 
    віднімання введіть - diff, 
    множення введіть - mult, 
    ділення введіть - div,
    Косинус числа в радіанах введіть - cos,
    Синус числа в радіанах введіть - sin,
    Перше число в ступені другого числа введіть - pow,
    Історія операцій введіть - history`);

    } while (operation !== 'sum' && operation !== 'diff' && operation !== 'mult' && operation !== 'div' && operation !== 'pow' && operation !== 'cos' && operation !== 'sin' && operation !== 'history' && operation == false);

    if (operation == 'sum' || operation == 'diff' || operation == 'mult' || operation == 'div' || operation == 'pow') {
        let a;
        let b;

        do {
            a = prompt('Введіть перше число');
            namberA = +a;
        } while (+a !== namberA || a === null || a === '');

        do {
            b = prompt('Введіть друге число');
            namberB = +b;
        } while (+b !== namberB || b === null || b === '');

        if (operation == 'sum') {
            result = `Сума числа ${namberA} та числа ${namberB} = ${namberA + namberB}`;
            alert(result);
        } else if (operation == 'diff') {
            result = `Різниця числа ${namberA} та числа ${namberB} = ${namberA - namberB}`;
            alert(result);
        } else if (operation == 'mult') {
            result = `Множення числа ${namberA} на число ${namberB} = ${namberA * namberB}`;
            alert(result);
        } else if (operation == 'div') {
            result = `Ділення числа ${namberA} на число ${namberB} = ${namberA / namberB}`;
            alert(result);
        } else if (operation == 'pow') {
            result = `Число ${namberA} в ступені числа ${namberB} = ${Math.pow(namberA, namberB)}`;
            alert(result);
        }
    } else if (operation == 'cos' || operation == 'sin') {
        let c;
        do {
            c = prompt('Введіть число в радіанах');
            namberC = +c;
        } while (+c !== namberC || c === null || c === '');
        if (operation == 'cos') {
            result = `Косинус ${namberC}рад = ${Math.cos(namberC)}`;
            alert(result);
        } else if (operation == 'sin') {
            result = `Синус ${namberC}рад = ${Math.sin(namberC)}`;
            alert(result);
        }
    } else if (operation == 'history') {

        if (array.length == 0) {
            result = 'Історія операцій порожня';
            alert(result);
        } else {
            let i = 0;
            while (i < array.length) {
                console.log(array[i]);
                i++;
            }
        }
    }
    
    if (result !== 'Історія операцій порожня') {
        array[array.length] = result;
    }
    
    next = confirm('Бажаєте виконати нові розрахунки?');
} while (next === true);
