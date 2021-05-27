let screen = document.querySelector('.result');

function getData(target) {
    let value = target.value;
    screen.value += target.value;
}

function calculate() {
    try{
        screen.value = eval(screen.value)
    }catch (error){
        screen.value = 'Error'
        setTimeout(() => {
            clean()
        }, 1000);
    }
}

function clean() {
    screen.value = ''
}