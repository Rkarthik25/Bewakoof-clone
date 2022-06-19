
  document.querySelector("#Vikas_My").addEventListener("submit", confirm);

  function confirm(event) {
    event.preventDefault();
    var otp = document.querySelector("#Vikas_OTP").value;
    if (otp == "1234") {
      document.querySelector("#Vikas_My").textContent = "";
      window.location.href = "Suceess_Vikas.html"
    } else {
        swal("Oops!", "Something went wrong on the page!", "error")
    }
  }
