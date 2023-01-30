function redirecting() {
    window.location.href = reservationPageURL;
    let inputName = document.getElementById("name").value;
    let inputEmail = document.getElementById("email").value;
    let inputCompany = document.getElementById("company").value;
    let inputMenu = document.getElementById("menu").value;
    let inputGoHome = document.getElementById("go-home").value;
    let inputCoffee = document.getElementById("coffee").value;

    console.log(reservationPageURL);
    console.log(inputName);
    console.log(inputEmail);
    console.log(inputCompany);
    console.log(inputMenu);
    console.log(inputGoHome);
    console.log(inputCoffee);
}

function getRadioItem(event) {
    purpose = event.target.value;
    console.log(purpose);
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

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", redirecting);

document.getElementById("networking-theme-item").style.display = "none";
document.getElementById("docu-item").style.display = "";
document.getElementById("business-theme-item").style.display = "";

urlSearch = new URLSearchParams(location.search);
reservationPageID = urlSearch.get("id");
reservationPageName = urlSearch.get("name");
console.log(reservationPageName);
document.getElementById("mentor-name").innerHTML = reservationPageName;

reservationPageURL =
    "https://www.sendtime.io/reservation?i=" + reservationPageID;
