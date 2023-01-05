const navBtn = document.querySelector('.navbar-toggler');
const navbarBrand = document.querySelector('.navbar-brand');

const nav = document.querySelector('nav');
const body = document.querySelector('body');

const allNavLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar-collapse');

// CONTACT FORM
const nameInput = document.querySelector('#full-name');
const emailInput = document.querySelector('#e-mail');
const numberInput = document.querySelector('#number');
const textarea = document.querySelector('#message');
const sendBtn = document.querySelector('#send-btn');

const nameError = document.querySelector('.name-error');
const emailError = document.querySelector('.email-error');
const numberError = document.querySelector('.number-error');
const messageError = document.querySelector('.message-error');

const popupBtn = document.querySelector('.popup__btn');
const popupShadow = document.querySelector('.popup__shadow');



const navMobileShadow = () => {
	nav.classList.toggle('show');
	allNavLinks.forEach(item => {
		item.addEventListener('click', () => {
			navbar.classList.remove('show');
		});
	});
	navbarBrand.addEventListener('click', () => {
		navbar.classList.remove('show');
	})
};

const closePopup = () => {
	popupShadow.style.display = 'none';
	body.style.overflow = 'visible';
	const allInputs = [nameInput, emailInput, numberInput, textarea];
	allInputs.forEach(el => {
		el.value = '';
	});
};

const phoneNumberCheck = () => {
	if (number.value.length === 9 || number.value === '') {
		clearError(numberInput);
	} else {
		showError(numberInput);
	}
};

const checkMail = emailInput => {
	const regExp =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

	if (regExp.test(emailInput.value)) {
		clearError(emailInput);
	} else {
		showError(emailInput);
	}
};

const showError = input => {
	const formItem = input.parentElement;
	formItem.classList.add('error');
};

const clearError = input => {
	const formItem = input.parentElement;
	formItem.classList.remove('error');
};

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el);
		} else {
			clearError(el);
		}
	});
};

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.contact__form-item');
	let errorCount = 0;

	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++;
		}
	});

	if (errorCount === 0) {
		popupShadow.style.display = 'block';
		body.style.overflow = 'hidden';
	}
};


const sendData = () => {
	checkForm([nameInput, emailInput, numberInput, textarea]);
	phoneNumberCheck();
	checkMail(emailInput);
	checkErrors();
	};



// API GOOGLE MAPS===============

const initMap = () => {
	const companyCordinations = { lat: 41.38098449325693, lng: 2.1228841763742823 };
	const map = new google.maps.Map(document.getElementById('map'), {
		center: companyCordinations,
		zoom: 16,
	});

	new google.maps.Marker({
		position: companyCordinations,
		map,
		title: 'Barber Shop Company',
	});
};

const contactPage = () => {
	if (body.hasAttribute('id')) {
		sendBtn.addEventListener('click', function () {
			sendData() 

	 	popupBtn.addEventListener('click', function () {
		closePopup()
	 	})

		initMap();
	})
}}



navBtn.addEventListener('click', navMobileShadow);
window.addEventListener('load', contactPage);

