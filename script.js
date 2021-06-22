const setButton = () => {
  let button = document.querySelector('#loginButton');
  button.addEventListener('click', function() {
    let loginText = document.querySelector('#login').value;
    let passwordText = document.querySelector('#password').value;
    if (loginText !== 'tryber@teste.com' || passwordText !== '123456') {
      alert('Login ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }
  })
}

setButton();