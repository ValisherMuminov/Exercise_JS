// let browser = "Safari";
// // switch (browser) {
// //     case 'Edge':
// //         alert("You've got the Edge!");
// //         break;
// //     case "Chrome":
// //     case "Firefox":
// //     case "Safari":
// //     case "Yandex":
// //         alert("Okay we support these browsers too");
// //         break;
// //     default:
// //         alert("We hope that this page looks ok!");
// // }
// // ++++++++++++++++++++++if,else
// if (browser === "Edge") {
//     alert("You've got the Edge!");
// } else if (browser === "Chrome" || "Firefox" || "Yandex" || "Safari") {
// //else if (browser === "Chrome" || browser === "Firefox" || browser === "Yandex" || browser === "Safari") {
//     alert("Okay we support these browsers too");
// } else {
//     alert("We hope that this page looks ok!");
// }
//=========================================================

let login = 'Employee';
// let message;
// if (login == 'Employee') {
//     message = 'Hello';
// } else if (login == 'Director') {
//     message = 'Greetings';
// } else if (login == '') {
//     message = 'No login';
// } else {
//     message = '';
// }

// +++++++++++++++++++++ " ? "
let message = (login === 'Employee') ? 'Hello' :
    (login === 'Director') ? 'Greetings' :
        (login === '') ? 'No login' : '';

console.log(message);