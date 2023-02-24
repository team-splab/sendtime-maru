function inputCheck() {
    inputURL = document.getElementById("url").value;
    inputContent = document.getElementById("content").value;
}

function submit() {
    document.getElementsByClassName("loadingPopup")[0].style.display = "block";
    date = new Date();

    inputURL = document.getElementById("url").value;
    inputContent = document.getElementById("content").value;
    inputCompany = document.getElementById("company").value;

    console.log(inputURL);
    console.log(inputContent);
    console.log(inputCompany);

    $.ajax({
        type: "POST",
        url: inputURL,
        data: JSON.stringify({
            attachments: [
                {
                    color: "#6056db",
                    pretext:
                        "지난 일주일간의 센드타임 API 서비스 사용량을 알려드립니다.",
                    title: inputCompany + "의 사용량",
                    text: inputContent,
                },
            ],
        }),
        dataType: "json",
        success: function (response) {
            console.log("전송완료");
            console.log(response);
            windows.alert("전송 완료했습니다.");
        },
    });
}

let inputCompany;
let inputName;
let inputEmail;
let inputPhone;
let inputPurpose = "business";
let inputDocu;
let inputBusinessTheme;
let inputNetworkingTheme;
let inputPrivate = "yes";
let inputTime;
let a = "T02FY8DGNBS";
let b = "B04MNGVHAP3";
let c = "9Rv9YDi0W9qOAMk6F9KRPi6m";

const submitButton = document.getElementById("submit-button-abled");
submitButton.addEventListener("click", submit);

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
console.log(inputTime);
