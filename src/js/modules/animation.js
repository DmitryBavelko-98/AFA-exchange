const COUNT_TIME = 200;

const $countersList = document.querySelector('#accessibility__items');
const $counters = document.querySelectorAll('.accessibility__value');
const $bodys = document.querySelectorAll('.accessibility__body');
const $lines = document.querySelectorAll('.accessibility__line');
const $introH = document.querySelector('#intro');

let isCounted = false;

function showNumbers () {
    $counters.forEach(startCounter)
}

function startCounter($counter) {
    const target = +$counter.dataset.value;
    
    const step = target / COUNT_TIME;
    console.log(step)

    updateCounter ($counter, 0, target, step);
}
 
function updateCounter($counter, start, target, step) {
    if (start < target + 0.01) {
        if (target < 1) {
            $counter.textContent = start.toFixed(2);
            setTimeout(() => {
                updateCounter($counter, start + step, target, step)
            }, 7)
        } else {
            $counter.textContent = start.toFixed(0);
            setTimeout(() => {
                updateCounter($counter, start + step, target, step)
            }, 12)
        }
    }
}

function startAnimation() {
    $bodys.forEach(body => {
        body.classList.add('active');
    })
    $lines.forEach(line => {
        line.classList.add('active');
    })
}

function renderItems() {
    if (isCounted) return;

    const rect = $countersList.getBoundingClientRect();
    if (rect.bottom < window.innerHeight) {
        isCounted = true;
        startAnimation();
        showNumbers();
    }
}

document.addEventListener('scroll', renderItems);









