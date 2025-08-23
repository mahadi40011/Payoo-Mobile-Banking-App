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

    // Phone number validity check
    if(phoneNumberValue.length === 0){
      numberErrorMessage.textContent = "Please Enter a Valid Number";
      return;
    }
    if (phoneNumberValue !== phoneNumber) {
      numberErrorMessage.textContent = "× Invalid Number";
      return;
    }

    // pin validity check
    if(pinValue.length === 0){
      pinErrorMessage.textContent = "Enter 4 Digit Pin";
      return;
    }
    if (pinValue !== pin) {
      pinErrorMessage.textContent = "× Wrong Pin";
      return;
    }

    // navigate to Home page
    window.location.href='./home.html'
  });
