let formElement = document.querySelector(".js-form");
let fieldA = document.querySelector(".js-fieldA");
let fieldB = document.querySelector(".js-fieldB");
let fieldC = document.querySelector(".js-fieldC");
let fieldD = document.querySelector(".js-fieldD");
let fieldE = document.querySelector(".js-fieldE");

formElement.addEventListener('focusin', (event) => {
    event.target.style.background = 'lightGray';
});

formElement.addEventListener('focusout', (event) => {
    event.target.style.background = '';
});

fieldA.onkeyup = function () { checkValueA() };

function checkValueA() {
    let a = +fieldA.value;
    let infoA = document.querySelector(".js-infoA");

    if (a == null || a == "" || a == ".") {
        infoA.innerHTML = "Wprowadź liczbę całkowitą większą od 0.";
        infoA.style.color = "red";
    }
    else if (a.value == 0) {
        infoA.innerHTML = "Wprowadzona wartość nie może być 0";
        infoA.style.color = "red";
    }
    else {
        infoA.innerHTML = "";
        infoA.style.color = "";
    };
    return false;
}

fieldB.onkeyup = function () { checkValueB() };

function checkValueB() {
    let b = +fieldB.value;
    let infoB = document.querySelector(".js-infoB");

    if (b == null || b == "" || b == ".") {
        infoB.innerHTML = "Wprowadź liczbę całkowitą większą od 0.";
        infoB.style.color = "red";
    }
    else if (b.value == 0) {
        infoB.innerHTML = "Wprowadzona wartość nie może być 0";
        infoB.style.color = "red";
    }
    else {
        infoB.innerHTML = "";
        infoB.style.color = "";
    };
    return false;
}

fieldC.onkeyup = function () { checkValueC() };

function checkValueC() {
    let c = +fieldC.value;
    let infoC = document.querySelector(".js-infoC");

    if (c == null || c == "") {
        infoC.innerHTML = "Wprowadź liczbę całkowitą większą od 0 lub dziesiętną, ale z kropką zamiast przecinka.";
        infoC.style.color = "red";
    }
    else if (c.value == 0) {
        infoC.innerHTML = "Wprowadzona wartość nie może być 0";
        infoC.style.color = "red";
    }
    else {
        infoC.innerHTML = "";
        infoC.style.color = "";
    };
    return false;
}

fieldD.onkeyup = function () { checkValueD() };

function checkValueD() {
    let d = +fieldD.value;
    let infoD = document.querySelector(".js-infoD");

    if (d == null || d == "" || d == ".") {
        infoD.innerHTML = "Wprowadź liczbę całkowitą większą od 0.";
        infoD.style.color = "red";
    }
    else if (d.value == 0) {
        infoD.innerHTML = "Wprowadzona wartość nie może być 0";
        infoD.style.color = "red";
    }
    else {
        infoD.innerHTML = "";
        infoD.style.color = "";
    };
    return false;
}

fieldE.onkeyup = function () { checkValueE() };

function checkValueE() {
    let e = fieldE.value;
    let infoE = document.querySelector(".js-infoE");

    if (e == ".") {
        infoE.innerHTML = "Wprowadź 0 lub inną liczbę całkowitą lub dziesiętną, ale z kropką zamiast przecinka.";
        infoE.style.color = "red";
    }
    else {
        infoE.innerHTML = "";
        infoE.style.color = "";
    };
    return false;
}