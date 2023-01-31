function submit() {
    inputCompany = document.getElementById("company").value;
    inputName = document.getElementById("name").value;
    inputEmail = document.getElementById("email").value;
    inputPhone = document.getElementById("phone").value;
    inputDocu = document.getElementById("docu").value;
    inputBusinessTheme = document.getElementById("business-theme").value;
    inputNetworkingTheme = document.getElementById("networking-theme").value;

    if (
        inputCompany == "" ||
        inputName == "" ||
        inputEmail == "" ||
        inputPhone == "" ||
        ((inputPurpose == "business" || inputPurpose == "fund") &&
            inputDocu == "") ||
        ((inputPurpose == "business" || inputPurpose == "fund") &&
            inputBusinessTheme == "") ||
        ((inputPurpose == "business" || inputPurpose == "fund") &&
            inputBusinessTheme == "") ||
        (inputPurpose == "networking" && inputNetworkingTheme == "")
    ) {
        document.getElementById("submit-disabled").style.display = "";
        document.getElementById("submit-abled").style.display = "none";
    } else {
        document.getElementById("submit-disabled").style.display = "none";
        document.getElementById("submit-abled").style.display = "";
    }
}

function redirecting() {
    inputCompany = document.getElementById("company").value;
    inputName = document.getElementById("name").value;
    inputEmail = document.getElementById("email").value;
    inputPhone = document.getElementById("phone").value;
    inputDocu = document.getElementById("docu").value;
    inputBusinessTheme = document.getElementById("business-theme").value;
    inputNetworkingTheme = document.getElementById("networking-theme").value;

    console.log(reservationPageURL);
    console.log(inputCompany);
    console.log(inputName);
    console.log(inputEmail);
    console.log(inputPhone);
    console.log(inputPurpose);
    console.log(inputDocu);
    console.log(inputBusinessTheme);
    console.log(inputNetworkingTheme);
    console.log(inputPrivate);

    document.getElementsByClassName("loadingPopup")[0].style.display = "block";
    window.location.href = reservationPageURL;
}

let inputPurpose = "business";
let inputPrivate = "yse";
let inputCompany;
let inputName;
let inputEmail;
let inputPhone;
let inputDocu;
let inputBusinessTheme;
let inputNetworkingTheme;

function getRadioItem(event) {
    purpose = event.target.value;
    console.log(purpose);
    inputPurpose = purpose;
    if (purpose == "business" || purpose == "fund") {
        document.getElementById("docu-item").style.display = "";
        document.getElementById("business-theme-item").style.display = "";
        document.getElementById("networking-theme-item").style.display = "none";
    } else if (purpose == "networking") {
        document.getElementById("docu-item").style.display = "none";
        document.getElementById("business-theme-item").style.display = "none";
        document.getElementById("networking-theme-item").style.display = "";
    }
}

function getPrivateItem(event) {
    private = event.target.value;
    console.log(private);
    inputPrivate = private;
}

const submitButton = document.getElementById("submit-button-abled");
submitButton.addEventListener("click", redirecting);

document.getElementById("networking-theme-item").style.display = "none";
document.getElementById("docu-item").style.display = "";
document.getElementById("business-theme-item").style.display = "";

urlSearch = new URLSearchParams(location.search);
reservationPageID = urlSearch.get("id");
reservationPageName = urlSearch.get("name");
console.log(reservationPageName);
document.getElementById("mentor-name").innerHTML = reservationPageName;

document.getElementById("submit-disabled").style.display = "";
document.getElementById("submit-abled").style.display = "none";

reservationPageURL =
    "https://www.sendtime.io/reservation?i=" + reservationPageID;
