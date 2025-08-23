document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = "01705254242";
    const pin = "1234";

    const phoneNumberValue = document.getElementById("phoneNumber").value;
    const pinValue = document.getElementById("pin").value;
    let numberErrorMessage = document.getElementById("numberErrorMsg");
    numberErrorMessage.textContent = "";
    let pinErrorMessage = document.getElementById("pinErrorMsg");
    pinErrorMessage.textContent = "";

    if (phoneNumberValue !== phoneNumber) {
      numberErrorMessage.textContent = "× Invalid Number";
    }
    if (pinValue !== pin) {
      pinErrorMessage.textContent = "× Wrong Pin";
    } 
    if(phoneNumberValue === phoneNumber && pinValue === pin){
      window.location.href='./home.html'
    }
  });
