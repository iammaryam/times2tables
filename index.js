function checkFunction() {
  let firstInput = document.querySelector("#first-input");
  let secondInput = document.querySelector("#second-input");
  let thirdInput = document.querySelector("#third-input");
  let forthInput = document.querySelector("#forth-input");
  let fifthInput = document.querySelector("#fifth-input");
  let sixthInput = document.querySelector("#sixth-input");

  let firstAskOne = document.querySelector("#first-ask").innerHTML[0]
  let firstAskTwo = document.querySelector("#first-ask").innerHTML.slice(4, 6)

  let secAskOne = document.querySelector("#sec-ask").innerHTML[0]
  let secAskTwo = document.querySelector("#sec-ask").innerHTML.slice(4, 6)

  let thirdAskOne = document.querySelector("#third-ask").innerHTML[0]
  let thirdAskTwo = document.querySelector("#third-ask").innerHTML.slice(4, 6)

  let forthAskOne = document.querySelector("#forth-ask").innerHTML[0]
  let forthAskTwo = document.querySelector("#forth-ask").innerHTML.slice(4, 6)

  let fifthAskOne = document.querySelector("#fifth-ask").innerHTML[0]
  let fifthAskTwo = document.querySelector("#fifth-ask").innerHTML.slice(4, 6)

  let sixthAskOne = document.querySelector("#sixth-ask").innerHTML[0]
  let sixthAskTwo = document.querySelector("#sixth-ask").innerHTML.slice(4, 6)

  if ((firstInput.value == firstAskOne * firstAskTwo) && (secondInput.value == secAskOne *  secAskTwo) && (thirdInput.value == thirdAskOne * thirdAskTwo) && (forthInput.value == forthAskOne * forthAskTwo) && (fifthInput.value == fifthAskOne * fifthAskTwo) && (sixthInput.value == sixthAskOne * sixthAskTwo)) {
    document.querySelector("#exam-check").innerHTML = "Congratulations, all of your answers are correct !!!";
  } else {
    document.querySelector("#exam-check").innerHTML = "Your answers are not correct ! <br> Please try more";
  }
}
