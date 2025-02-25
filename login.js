document
  .getElementById('login-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById('account-number').value;
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    if (accountNumber.length === 11) {
      if (convertedPin === 1234) {
        // console.log('okay thik ace');

        window.location.href = './main.html';
      } else {
        alert('pin thik nai');
      }
    } else {
      alert('need valid account number');
    }
  });

// if (accountNumber.length === 11) {
//   if (pin === '1234') {
//     // Pin check as string
//     console.log('okay thik ace');
//   } else {
//     console.log('na Thik nai');
//   }
// } else {
//   console.log('need valid account');
// }
