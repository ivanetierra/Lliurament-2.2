
// Exercise 6
document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault();
    validate();
});

function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
    var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");	
	var errorPhone = document.getElementById("errorPhone");
	
	// Validate fields entered by the user: name, phone, password, and email
	var nameRegex = /^[a-zA-Z]+$/;
    var phoneRegex = /^\d{9}$/;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
    var emailRegex = /^\S+@\S+\.\S+$/;
	
	validateField(fName, nameRegex, errorName);
    validateField(fEmail, emailRegex, errorEmail);
    validateField(fAddress, nameRegex, errorAddress);
    validateField(fLastN, nameRegex, errorLastN);
    validateField(fPassword, passwordRegex, errorPassword);
    validateField(fPhone, phoneRegex, errorPhone);

    function validateField(field, regex, errorElement) {
        if(field.value.length>= 3 && regex.test(field.value)){
			field.classList.remove('is-invalid');
            errorElement.style.display = 'none';
		} else {
			error++;
			field.classList.add('is-invalid');
			errorElement.style.display = 'block';
        }
    }
	 
	if(error === 0){

		setTimeout(()=> {alert("OK");}, 100);
	}
}
