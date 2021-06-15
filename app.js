// Form blur event listeners
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName() {
	const name = document.getElementById("name");
	// Validate name on roman letter characters only and between two and ten characters
	const re = /^[a-zA-Z]{2,10}$/;

	if (!re.test(name.value)) {
		name.classList.add("is-invalid");
	} else {
		name.classList.remove("is-invalid");
	}
}

function validateZip() {
	const zip = document.getElementById("zip");
	// Validate that zip is a five digit US zip or a US zip+4
	const re = /^[0-9]{5}(-[0-9]{4})?$/;

	if (!re.test(zip.value)) {
		zip.classList.add("is-invalid");
	} else {
		zip.classList.remove("is-invalid");
	}
}

function validateEmail() {
	const email = document.getElementById("email");
	// Validate that the email is properly formatted with standard user@host.tld with a 2 to 5 character tld
	const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}$)/;

	if (!re.test(email.value)) {
		email.classList.add("is-invalid");
	} else {
		email.classList.remove("is-invalid");
	}
}

function validatePhone() {
	const phone = document.getElementById("phone");
	// Validate the phone number is a standard US phone with area code in a standard format i.e. 123-456-7890, 123.456.7890, 1234567890, 123 456 7890 or (123) 456-7890
	const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

	if (!re.test(phone.value)) {
		phone.classList.add("is-invalid");
	} else {
		phone.classList.remove("is-invalid");
	}
}
