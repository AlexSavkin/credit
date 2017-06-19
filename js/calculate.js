var priceAuto = document.getElementById("priceAuto");
var deposite = document.getElementById("deposite");
var period = document.getElementById("period");
var creditForm = document.getElementById("creditForm");
var clientName = document.getElementById("clientName");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var summary = document.getElementById("summary");
var okButton = document.getElementsByClassName("ok")[0];
var success = document.getElementById("success");

function positionSliderPriceAuto() {
    var sliderPriceAuto = document.getElementById("sliderPriceAuto");
    sliderPriceAuto.value = priceAuto.value;
}

function valuePriceAuto() {
    valueSlider = document.getElementById("sliderPriceAuto").value;
    priceAuto.value = valueSlider;
}

function positionSliderDeposite() {
    sliderDeposite = document.getElementById("sliderDeposite");
    sliderDeposite.value = deposite.value;
}

function valueDeposite() {
    valueSlider = document.getElementById("sliderDeposite").value;
    deposite.value = valueSlider;
}

function positionSliderPeriod() {
    sliderPeriod = document.getElementById("sliderPeriod");
    sliderPeriod.value = period.value;
}

function valuePeriod() {
    valueSlider = document.getElementById("sliderPeriod").value;
    period.value = valueSlider;
}

function calcCredit() {
    var payment =
        Math.round((priceAuto.value - deposite.value)/(1 - 1/Math.pow((10000 + 1183)/10000, period.value) )/10);

    summary.innerHTML = payment;
    return payment;
}

function onOkbuttonClick() {
    okButton.className = 'ok';

    var payment = calcCredit();
    var letter = clientName.value + ", вы указали номер " + phone.value + " для взятия кредита в " + priceAuto.value + 
                 " рублей с первоначальным взносом в " + deposite.value + " рублей на срок " + period.value + 
                 " месяцев. Ежемесячный платеж составит: " + payment + " рублей."; 

    console.log(letter);                
    console.log('Отправить на почту');

    success.innerHTML = 'Письмо отправлено';

    setTimeout(function() {
        success.innerHTML = '';                
    }, 3000)
};




