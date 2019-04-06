// use strict

(function () {
	
	var logInBtn = document.querySelector('.login-btn');
	logInBtn.onclick = EnterLogin;

	
})();

function EnterLogin() {
	var login = 'Admin',
	password = 'Черный Властелин',
	a = prompt('Ваш логин:');
	logInDesc = document.querySelector('.login-desc');

	if (a == login) {
		
		var b = prompt('Ваш пароль:');
		if (b == password) {
			logInDesc.innerHTML = 'Вход выполнен! Добро пожаловать, <strong>BBC</strong>';
			var logInWrap = document.querySelector('.login-wrap');
			logInWrap.innerHTML += '<img width="1000px" src="hqdefault.jpg" alt="123" class="login-img">';
		} else {
			logInDesc.innerHTML = 'Не верный пароль!';
		}
	} else {
		logInDesc.innerHTML = 'Я вас не знаю!';
	}
	

}	