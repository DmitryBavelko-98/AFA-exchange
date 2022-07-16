
let crypto = document.querySelector('.accessibility__crypto'),
    country = document.querySelector('.accessibility__country'),
    fees =  document.querySelector('.accessibility__fees'),
    bodys = document.querySelectorAll('.accessibility__body'),
    lines = document.querySelectorAll('.accessibility__line'),
    introH = document.querySelector('#intro'),
    scrollOffset;

function setOffset() {
    scrollOffset = document.documentElement.scrollTop;
}

function showNumbers () {
    let cryptoValue = 400;
    let countryValue = 2;
    let feesValue = 0;

    function increaseField(field, value, maxValue, timer) {
        if (value < 1.15) {
            value += 0.01;
            timer = setTimeout(() => increaseField(field, value, maxValue, timer), 100);
            field.innerHTML = value.toFixed(2);
        } else {
            value += 1;
            timer = setTimeout(() => increaseField(field, value, maxValue, timer), 0);
            field.innerHTML = value;
        }
        if (value >= maxValue) {
            clearTimeout(timer);
        }
    }

    let cryptoTimer = setTimeout(() => increaseField(crypto, cryptoValue, 847, cryptoTimer), 0);
    let countryTimer = setTimeout(() => increaseField(country, countryValue, 200, countryTimer), 0);
    let feesTimer = setTimeout(() => increaseField(fees, feesValue, 0.15, feesTimer), 100);
}

function startAnimation() {
    bodys.forEach(body => {
        body.classList.add('active');
    })
    lines.forEach(line => {
        line.classList.add('active');
    })
}

function renderItems() {
    setOffset();
    if (scrollOffset > introH.clientHeight - 200) {
        startAnimation();
        showNumbers();
    }
}

window.addEventListener('scroll', renderItems);

window.addEventListener('scroll', () => {
    if (scrollOffset > introH.clientHeight - 200) {
        window.removeEventListener('scroll', renderItems);
    }
});












