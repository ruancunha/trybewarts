const setButton = () => {
  const button = document.querySelector('#loginButton');
  button.addEventListener('click', () => {
    const loginText = document.querySelector('#login').value;
    const passwordText = document.querySelector('#password').value;
    if (loginText !== 'tryber@teste.com' || passwordText !== '123456') {
      alert('Login ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }
  });
};

setButton();
