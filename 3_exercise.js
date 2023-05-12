
let num = 0;
for (i = 1; i < 10; i++) {
  if (i % 2 === 0) console.log(`Juft son: ${i}`);
  else console.log(`toq son ${i}`);
}
// //============================================

let str = "fozil";
//for (let i = str.length ; i >= 0; i--) { undefined bn chiqadi sabab -1da ochadi
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}
//=============================================

let str2 = "WeBbraIN";
for (let i = 0; i <= str2.length -1; i++) {
  if (str2[i] == "e" || str2[i] == "b" || str2[i] == "r" || str2[i] == "a") {
    continue;

  //   if (str2[i] == "e") {
  //   continue;                 // X break;
  // } else if (str2[i] == "b") {
  //   continue;
  // } else if (str2[i] == "r") {
  //   continue;
  // } else if (str2[i] == "a") {
  //   continue;
  // } else {
  //   (str2[i]);
  }
    console.log(str2[i]);
}
// //=============================================

let str3 = "webbrainAcadAmiya";
let harfsoni = 0;
for (let i = 0; i < str3.length; i++) {
    if (str3[i] === "A" || str3[i] === "a") {
        harfsoni ++;
  }
  //   if (str[i] === "A") {
  //   harfsoni++;
  // } else if (str[i] === "a") {
  //   hasrfsoni++;
  // }
}
console.log(harfsoni);