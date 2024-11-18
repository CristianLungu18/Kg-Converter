const inputValue = document.querySelector(".unit-input");
const unitKgBox = document.querySelector(".unit-kg");
const unitHgBox = document.querySelector(".unit-hg");
const unitDagBox = document.querySelector(".unit-dag");
const unitgBox = document.querySelector(".unit-g");
const unitDgBox = document.querySelector(".unit-dg");
const unitCgBox = document.querySelector(".unit-cg");
const unitMgBox = document.querySelector(".unit-mg");
const calculateBtn = document.querySelector(".calculate-btn ");

const isNumber = (input) => {
  const regex = /^\d+(\.\d+)?$/;
  return regex.test(input);
};

calculateBtn.addEventListener("click", () => {
  if (
    !inputValue.value ||
    inputValue.value < 0 ||
    !isNumber(inputValue.value)
  ) {
    alert("Please enter a correct value!");
    inputValue.value = "";
    return;
  }

  const myValue = Number(inputValue.value);
  const kgValue = myValue;
  const HgValue = myValue * 10;
  const DagValue = myValue * 100;
  const GValue = myValue * 1000;
  const DgValue = myValue * 10000;
  const CgValue = myValue * 100000;
  const MgValue = myValue * 1000000;
  unitKgBox.innerHTML = `${myValue} kg : ${kgValue} kg`;
  unitHgBox.textContent = `${myValue} kg : ${HgValue} hg`;
  unitDagBox.textContent = `${myValue} kg : ${DagValue} dag`;
  unitgBox.textContent = `${myValue} kg : ${GValue} g`;
  unitDgBox.textContent = `${myValue} kg : ${DgValue} dg`;
  unitCgBox.textContent = `${myValue} kg : ${CgValue} cg`;
  unitMgBox.textContent = `${myValue} kg : ${MgValue} mg`;
  inputValue.value = "";
});
