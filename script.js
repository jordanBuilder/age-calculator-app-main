// we select the output elements

const output_year = document.querySelector(".output-year");

const output_month = document.querySelector(".output-month");

const output_day = document.querySelector(".output-day");

const submit_btn = document.querySelector(".submit-btn");

// we need to select the input elements

const input_year = document.querySelector("#year");

const input_day = document.querySelector("#day");

const input_month = document.querySelector("#month");

//we need to select the errors elements

const errorDay = document.querySelector(".error-day");

const errorMonth = document.querySelector(".error-month");

const errorYear = document.querySelector(".error-year");

let isValid = false;
/* utilisons l'evenement input qui se declenche quand on reçoit une entrée de la zone de texte recupéré */

submit_btn.addEventListener("click", calculateDate);

input_day.addEventListener("input", (event) => {
    if (+input_day.value > 31 || +input_day.value < 0) {
        errorDay.textContent = "Must be a valid date";
        isValid = false;
        return;

    } else {
        isValid = true;
        errorDay.textContent = "";
    }

    if (+input_day.value == 0) {
        isValid = false;
        errorDay.textContent = "This field is required";
        isValid = false;
        return;
    }
});

input_month.addEventListener("input", (event) => {
    if (+input_month.value > 12 || input_month.value < 0) {
        errorMonth.textContent = "Must be a valid date";
        isValid = false;
        return;

    } else {
        isValid = true;
        errorMonth.textContent = "";
    }

    if (+input_month.value == 0) {
        isValid = false;
        errorMonth.textContent = "This field is required";
        isValid = false;
        return;
    }
});

input_year.addEventListener("input", (event) => {
    if (+input_year.value > 2023 || +input_year.value < 0) {
        errorYear.textContent = "Must be a valid date";
        isValid = false;
        return;

    } else {
        isValid = true;
        errorYear.textContent = "";
    }

    if (+input_year.value == 0) {
        isValid = false;
        errorYear.textContent = "This field is required";
        isValid = false;
        return;
    }
});

function calculateDate() {
    if (isValid) {
        let birthDay = `${input_month.value}/${input_day.value}/${input_year.value}`;

        console.log(birthDay);

        let birthdayObject = new Date(birthDay);

        let ageDiffMill = Date.now() - birthdayObject;

        let ageDate = new Date(ageDiffMill);

        let ageYears = ageDate.getUTCFullYear() - 1970;

        let ageMonth = ageDate.getUTCMonth();

        let ageDay = ageDate.getUTCDay();

        output_day.textContent = ageDay;

        output_month.textContent = ageMonth;

        output_year.textContent = ageYears;
    } else {
        alert("error");
    }
}