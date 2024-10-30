
function enter(num) {
    let display = document.getElementById('display');
    display.value = display.value + num;
}

function ac() {
    let display = document.getElementById('display');
    display.value = '';
}

function de() {
    let dp = document.getElementById('display');
    dp.value = dp.value.toString().slice(0,-1);
}

function ans() {
    let display = document.getElementById('display');
    try{
    display.value = eval(display.value);    
    } catch(err) {
        display.value = 'Syntex ERROR'
    }
    
}