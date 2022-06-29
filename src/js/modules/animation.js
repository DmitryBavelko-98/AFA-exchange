
let crypto = document.querySelector('.accessibility__crypto'),
    country = document.querySelector('.accessibility__country'),
    fees =  document.querySelector('.accessibility__fees'),
    bodys = document.querySelectorAll('.accessibility__body'),
    lines = document.querySelectorAll('.accessibility__line'),
    introH = document.querySelector('#intro').clientHeight,
    scrollOffset;

    console.log(introH)

function setOffset() {
    scrollOffset = document.documentElement.scrollTop;
    console.log(scrollOffset)
}

function showNumbers () {
    let cryptoValue = 500;
    let countryValue = 0;
    let feesValue = 0;

    let cryptoTimer = setTimeout(function increaseCrypto() {
        cryptoValue += 1;
        crypto.innerHTML = cryptoValue;
        cryptoTimer = setTimeout(increaseCrypto, 0);
        if (cryptoValue >= 847) {
            clearTimeout(cryptoTimer);
        }
    }, 0);
    
    let countryTimer = setTimeout(function increaseCountry() {
        countryValue += 1;
        country.innerHTML = countryValue;
        countryTimer = setTimeout(increaseCountry, 0); 
        if (countryValue >= 200) {
            clearTimeout(countryTimer);
        }
    }, 0);

    let feesTimer = setTimeout(function increaseFees() {
        feesValue += 0.01;
        fees.innerHTML = feesValue.toFixed(2);
        feesTimer = setTimeout(increaseFees, 100); 
        if (feesValue >= 0.15) {
            clearTimeout(feesTimer);
        }
    }, 100);
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
    if (scrollOffset > introH - 200) {
        startAnimation();
        showNumbers();
    }
}

window.addEventListener('scroll', renderItems);

window.addEventListener('scroll', () => {
    if (scrollOffset > introH - 200) {
        window.removeEventListener('scroll', renderItems);
    }
});












