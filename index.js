const $el = [document.getElementById('img1'), document.getElementById('img2'), document.getElementById('img3'), document.getElementById('img4')]
const $dots = document.querySelector('.dots');

let i = 0;

function carousel(a) {
    $dots.children[i].classList.remove('on')
    $el[i].classList.remove('active')
    a == 'up'
    ? i < 3 ? i++ : i=0
    : i > 0 ? i-- : i=3
    $el[i].classList.add('active')
    $dots.children[i].classList.add('on')
}

function dotClicked(n){
    $dots.children[i].classList.remove('on')
    $el[i].classList.remove('active')
    i = n
    $el[i].classList.add('active')
    $dots.children[i].classList.add('on')
}