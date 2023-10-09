const bill_amnt = document.getElementById("bill");
const bill_inp = document.getElementById("bill-inp");
const people_inp = document.getElementById("people-inp");
const tip_amnt = document.getElementsByClassName("tip-btn");
const custome_tip = document.getElementById("custom");
const person = document.getElementById("people");
const resetBtn = document.getElementById("reset-btn");

const total_tip = document.getElementById("total-tip");
const total_price = document.getElementById("total-price");

let bill = 0;
let tip = 0;
let total_Tip = 0.0;
startingTip();
perPerson();

function startingTip() {
  total_tip.innerHTML = "0.00";
}

function perPerson() {
  total_price.innerHTML = "0.00";
}

function handleChange() {
  bill = bill_amnt.value;
  return bill;
}

function calcTip() {
  total_Tip = (bill * tip) / 100;
  total_tip.innerHTML = total_Tip.toFixed(2);
}

bill_amnt.addEventListener("change", () => {
  handleChange();
});

for (let i = 0; i < tip_amnt.length; i++) {
  tip_amnt[i].addEventListener("click", () => {
    tip = tip_amnt[i].value;
    bill_inp.style.border = "";
    calcTip();
    return tip;
  });
}

custome_tip.addEventListener("change", () => {
  tip = custome_tip.value;
  calcTip();
});

person.addEventListener("change", () => {
  let people = person.value;
  total_price.innerHTML = (total_Tip / people).toFixed(2);
});

resetBtn.addEventListener("click", () => {
  bill_amnt.value = "";
  tip = 0;
  total_tip.innerHTML = "0.00";
  total_price.innerHTML = "0.00";
  custome_tip.value = "";
  person.value = "";
});

bill_inp.addEventListener("click", () => {
  bill_inp.style.border = "2px solid hsl(172, 67%, 45%)";
});
