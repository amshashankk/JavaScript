
/// Check Name
const ValidateName = () => {
    var name = document.getElementById("Name").value;
    const Style = document.getElementById('Name');
    var nameError = document.getElementById("NameError");

    if (name == "" || !(/^[a-z A-Z]{3,25}$/.test(name))) {
        nameError.innerHTML = "Name must be characters and length must be in between 3 to 25 characters";
        Style.style.color = "red";
        Style.style.borderColor = "red";
        return false;
    } else {
        nameError.innerHTML = "";
        Style.style.color = "green";
        Style.style.borderColor = "green";
    }
    return true
};

// Check Email
const ValidateEmail = () => {
    var email = document.getElementById("Email").value;
    const Style = document.getElementById('Email');
    var emailError = document.getElementById("EmailError");

    if (email == "" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})*(\.\w{2,5})+$/.test(email))) {
        emailError.innerHTML = "Please enter the correct email";
        Style.style.color = "red";
        Style.style.borderColor = "red";
        return false;
    } else {
        emailError.innerHTML = "";
        Style.style.color = "green";
        Style.style.borderColor = "green";
    }
    return true
};


// Check Date of birth

//setting up max date
var todayDate = new Date()
var month = todayDate.getMonth() + 1;
var year = todayDate.getFullYear();
var currentdate = todayDate.getDate();
if (month < 9) {
    month = "0" + month;} 
if (currentdate < 10) {
    currentdate = "0" + currentdate;}

var maxDate = year + "-" + month + "-" + currentdate;
document.getElementById("Dob").setAttribute("max", maxDate)

const ValidateDob = () => {
    var date = document.getElementById("Dob").value;
    const Style = document.getElementById('Dob');
    var dobError = document.getElementById("DobError");

    var Input = new Date(date);
    var CurrentMonth = Date.now() - Input.getTime();
    var Age = new Date(CurrentMonth);
    var CurrentYear = Age.getFullYear();
    var age = Math.abs(CurrentYear - 1970);
    var PresentDate = new Date();

    if (date == "") {
        dobError.innerHTML = "Please select date";
        Style.style.color = "red";
        Style.style.borderColor = "red";
        return false
    } else if (CurrentYea > PresentDate) {
        dobError.innerHTML = "Birth year cannot be greater than current year";
        Style.style.color = "red";
        Style.style.borderColor = "red";
        document.getElementById("age").value = "";
        return false

    } else if (age < 18) {
        dobError.innerHTML = "Age must be 18 or above";
        Style.style.color = "red";
        Style.style.borderColor = "red";
        document.getElementById("age").value = "";
        return false
    } else {
        dobError.innerHTML = "";
        Style.style.color = "green";
        Style.style.borderColor = "green";
        document.getElementById("age").value = age;

    }
    return true
}

// Check Phone number
const ValidatePhone = () => {
    var mobileNumber = document.getElementById("Phone").value;
    const Style = document.getElementById('Phone');
    var mobileError = document.getElementById("PhoneError");

    if (mobileNumber == "" || mobileNumber.length != 10) {
        mobileError.innerHTML = "Please enter the correct mobile number";
        Style.style.color = "red";
        Style.style.borderColor = "red";
        return false;
    } else {
        mobileError.innerHTML = "";
        Style.style.color = "green";
        Style.style.borderColor = "green";
    }
    return true
}

// Check Password
const ValidatePassword = () => {
    var pass = document.getElementById("Password").value;
    const Style = document.getElementById('Password');
    var passError = document.getElementById("PasswordError");

    if (pass == "") {
        passError.innerHTML = "Please enter the password";
        Style.style.borderColor = "red"
        Style.style.color = "red";
        return false;
    } else if (!(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,20}/).test(pass)) {
        passError.innerHTML = "Password must contain upper case & lower case alphanumeric & special characters"
    } else {
        document.getElementById("PasswordError").innerHTML = "";
        Style.style.color = "green";
        Style.style.borderColor = "green"
    }
    return true
}

// Check Confirm Password
const ValidateConfirmPassword = () => {
    var pass = document.getElementById("Password").value;
    const Style = document.getElementById('ConfirmPassword');
    var passError = document.getElementById("ConfirmPasswordError");

    var confirmpass = document.getElementById("ConfirmPassword").value;

    if (pass != confirmpass || confirmpass == "") {
        passError.innerHTML = "Password does not match";
        Style.style.color = "red";
        Style.style.borderColor = "red";
        return false;
    } else {
        passError.innerHTML = "";
        Style.style.color = "green";
        Style.style.borderColor = "green";
    }
    return true
}

var CountryObject = {
    "USA": {
        "Maryland": null,
        "Chicago": null
    },
    "India": {
        "Uttar Pradesh": null,
        "Madhya Pradesh": null
    }

}

window.onload = function () {
    var SelCountry = document.getElementById("country");
    var SelState = document.getElementById("state");

    for (var country in CountryObject) {
        SelCountry.options[SelCountry.options.length] = new Option(country, country);
    }
    SelCountry.onchange = function () {
        SelState.length = 1;
        for (var state in CountryObject[this.value]) {
            SelState.options[SelState.options.length] = new Option(state, state);
        }
    }
    SelCountry.onchange()
    return true
}

// Check State
const ValidateState = () => {
    var state = document.getElementById("state").value;
    const Style = document.getElementById('state');
    var stateError = document.getElementById("fstate");

    if (state == 0) {
        stateError.innerHTML = "Please select country first";
        Style.style.color = "red";
        Style.style.borderColor = "red";
        return false;
    } else {
        stateError.innerHTML = "";
        Style.style.color = "green";
        Style.style.borderColor = "green";
    }
    return true
}

// Check Country
const ValidateCountry = () => {
    var country = document.getElementById("country").value;
    const Style = document.getElementById('country');
    const Style1 = document.getElementById('state');
    var countryError = document.getElementById("fcountry");
    var stateError = document.getElementById("fstate");

    if (country == 0) {
        countryError.innerHTML = "Please select country";
        stateError.innerHTML = "Please select country first";
        Style.style.color = "red";
        Style1.style.color = "red";
        Style.style.borderColor = "red";
        Style1.style.borderColor = "red";
        return false
    } else {
        countryError.innerHTML = "";
        stateError.innerHTML = "";
        Style.style.color = "green";
        Style.style.borderColor = "green";
        Style1.style.color = "";
        Style1.style.borderColor = "";
    }
    return true
}

function Submit() {
    ValidateName();
    ValidateEmail();
    ValidateDob();
    ValidatePhone();
    ValidateCountry();
    ValidateState();
    ValidatePassword();
    ValidateConfirmPassword();


    if (
        ValidateName() == true &&
        ValidateEmail() == true &&
        ValidateDob() == true &&
        ValidatePhone() == true &&
        ValidatePassword() == true &&
        ValidateConfirmPassword() == true &&
        ValidateCountry() == true &&
        ValidateState() == true

    ) {
        var input = document.getElementById("Name").value;
        Output.innerHTML = "Name : " + input;

        var input1 = document.getElementById("Email").value;
        Output1.innerHTML = "Email : " + input1

        var input2 = document.getElementById("Dob").value;
        Output2.innerHTML = "Dob : " + input2;

        var input3 = document.getElementById("age").value;
        Output3.innerHTML = "Age: " + input3;

        var input4 = document.getElementById("Phone").value;
        Output4.innerHTML = "Contact : " + input4;

        var input5 = document.getElementById("country").value;
        Output5.innerHTML = "Country : " + input5;

        var input6 = document.getElementById("state").value;
        Output6.innerHTML = "State : " + input6;

        document.getElementById("submit").innerHTML = "";
        document.Form.reset();

    }

}

