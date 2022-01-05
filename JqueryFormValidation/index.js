
$(document).ready(function () {
    //Jquery validate name
    $.ValidateName = function () {
        var name = $("#Name").val();
        var nameError = $("#NameError");
        if (name == "" || !(/^[a-z A-Z]{3,25}$/.test(name))) {
            nameError.html("Name must be characters and length must be in between 3 to 25 characters");
            $("#Name").css("border-color", "red");
            $("#Name").css("color", "red");
            return false;
        } else {
            nameError.html("");
            $("#Name").css("border-color", "green");
            $("#Name").css("color", "green");
            return true;
        }
    };
    $("#Name").keyup($.ValidateName);


    // Jquery validate email
    $.ValidateEmail = function () {
        var email = $("#Email").val();
        var emailError = $("#EmailError");
        if (email == "" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})*(\.\w{2,5})+$/.test(email))) {
            emailError.html("Email must be characters and length must be in between 3 to 25 characters");
            $("#Email").css("border-color", "red");
            $("#Email").css("color", "red");
            return false;
        } else {
            emailError.html("");
            $("#Email").css("border-color", "green");
            $("#Email").css("color", "green");
            return true;
        }

    };
    $("#Email").keyup($.ValidateEmail);


    // Jquery Validate Date of Birth
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
        
    $.ValidateDateOfBirth = function () {
        var dob = $("#Dob").val();
        var dobError = $("#DobError");
        var BirthDate = new Date(dob); //getting birth date from the use input
        var CurrentDate = new Date();
        var Age = Math.floor((CurrentDate - BirthDate) / (365.25 * 24 * 60 * 60 * 1000));

        if (dob == "") {
            dobError.html("Please select date")
            $("#Dob").css("border-color", "red");
            $("#Dob").css("color", "red");
            return false;
        } else if (Age <= 17) {
            dobError.html("Age must be 18 or above")
            $("#Dob").css("border-color", "red");
            $("#Dob").css("color", "red");
            $("#age").val("");
            return false;
        } else {
            dobError.html("");
            $("#Dob").css("border-color", "green");
            $("#Dob").css("color", "green");
            $("#age").val(Age)
            return true;
        }

    }
    $("#Dob").change($.ValidateDateOfBirth);

    // Jquery  Validate Phone Number
    $.ValidatePhoneNumber = function () {
        var PhoneNumber = $("#Phone").val();
        var PhoneError = $("#PhoneError")

        if (PhoneNumber == "" || PhoneNumber.length != 10) {
            PhoneError.html("Please enter the correct mobile number")
            $("#Phone").css("border-color", "red");
            $("#Phone").css("color", "red");
            return false;
        } else {
            PhoneError.html("");
            $("#Phone").css("border-color", "green");
            $("#Phone").css("color", "green");
            return true;
        }

    };
    $("#Phone").keyup($.ValidatePhoneNumber);

    // Jquery Password Validation
    $.ValidatePassword = function () {
        var password = $("#Password").val();
        var passwordError = $("#PasswordError");
        if (password == "") {
            passwordError.html("Password cannot be empty");
            $("#Password").css("border-color", "red");
            $("#Password").css("color", "red");
            return false;
        } else if (!(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,20}/.test(password))) {
            passwordError.html("Password must be alphanumeric & special characters and length range must be 8 to 25 characters");
            $("#Password").css("border-color", "red");
            $("#Password").css("color", "red");
            return false;
        } else {
            passwordError.html("");
            $("#Password").css("border-color", "green");
            $("#Password").css("color", "green");
            return true;
        }

    };
    $("#Password").keyup($.ValidatePassword);


    // Jquery Confirm Password Validation
    $.ValidateConfirmPassword = function () {
        var confirmPassword = $("#ConfirmPassword").val();
        var confirmPasswordError = $("#ConfirmPasswordError");
        var password = $("#Password").val();
        if (confirmPassword == "") {
            confirmPasswordError.html("Please enter the confirm password");
            $("#ConfirmPassword").css("border-color", "red");
            $("#ConfirmPassword").css("color", "red");
            return false;
        } else if (confirmPassword != password) {
            confirmPasswordError.html("Password does not match");
            $("#ConfirmPassword").css("border-color", "red");
            $("#ConfirmPassword").css("color", "red");
            return false;
        } else {
            confirmPasswordError.html("");
            $("#ConfirmPassword").css("border-color", "green");
            $("#ConfirmPassword").css("color", "green");
            return true;
        }

    };
    $("#ConfirmPassword").keyup($.ValidateConfirmPassword);

    // Jquery Country Select
    $.CountryAndState = function () {
        var Country = new Array("Select Country", "India", "USA")

        $.each(Country, function (_, CountryName) {
            $("#Country").append($("<option>", { value: CountryName, text: CountryName }, "</option>"))
        })

        var State = new Array("Select State", "Select State, Uttar Pradesh, Madhya Pradesh", "Select State, Maryland, Chicago");

        $("#Country").change(function () {
            var CountryObject = $(this).val();
            var index = Country.indexOf(CountryObject);
            var StateObject = State[index].split(",");

            $("#State").empty();
            $.each(StateObject, function (_, StateName) {
                $("#State").append($("<option>", { value: StateName, text: StateName }, "</option>"));
            }
            );
        });
    };
    $.CountryAndState();

    // Jquery Validate Country
    $.ValidateCountry = function () {
        var country = $("#Country").val();
        var countryError = $("#CountryError")
        var statError = $("#StateError")
        if (country == "Select Country") {
            countryError.html("Please select the country");
            $("#Country").css("border-color", "red");
            $("#Country").css("color", "red");
            $("#state").css("border-color", "red");
            $("#state").css("color", "red");
            return false;
        } else {
            countryError.html("");
            statError.html("");
            $("#Country").css("border-color", "green");
            $("#Country").css("color", "green");

        }
        $.ValidateState();
        return true;
    };
    $("#Country").change($.ValidateCountry);

    // Jquery Validate State
    $.ValidateState = function () {
        var state = $("#State")
        var stateError = $("#StateError")
        if (state.val() == "Select State" || state.val() == 0) {
            stateError.html("Please select the state");
            $("#State").css("border-color", "red");
            $("#State").css("color", "red");
            return false;
        } else {
            stateError.html("");
            $("#State").css("border-color", "green");
            $("#State").css("color", "green");
            return true;
        }
    };
    $("#State").change($.ValidateState);

    // Jquery Submit Button
    $.Submit = function () {

        $.ValidateName();
        $.ValidateEmail();
        $.ValidateDateOfBirth();
        $.ValidatePhoneNumber();
        $.ValidatePassword();
        $.ValidateConfirmPassword();
        $.ValidateCountry();
        $.ValidateState();

        if (
            $.ValidateName() == true &&
            $.ValidateEmail() == true &&
            $.ValidateDateOfBirth() == true &&
            $.ValidatePhoneNumber() == true &&
            $.ValidatePassword() == true &&
            $.ValidateConfirmPassword() == true &&
            $.ValidateCountry() == true &&
            $.ValidateState() == true
        ) {
            $("#OutputHeading").text("Form Output")
            $("#Output").text("Name : " + $("#Name").val());
            $("#Output1").html("Email : " + $("#Email").val());
            $("#Output2").text("Phone : " + $("#Phone").val());
            $("#Output3").text("DOB : " + $("#Dob").val());
            $("#Output4").text("Age : " + $("#age").val());
            $("#Output5").text("Country : " + $("#Country").val());
            $("#Output6").text("State : " + $("#State").val());

            document.Form.reset();
            
            $("#State option").each(function () {
                $(this).remove();
            });
            $('#State').append($('<option>Select State</option>'));


            $("#Name").css("border-color", "");
            $("#Email").css("border-color", "");
            $("#Phone").css("border-color", "");
            $("#Dob").css("border-color", "");
            $("#Dob").css("color", "");
            $("#Country").css("border-color", "");
            $("#Country").css("color", "");
            $("#State").css("border-color", "");
            $("#State").css("color", "");
            $("#Password").css("border-color", "");
            $("#ConfirmPassword").css("border-color", "");
        } else {
            return false;
        }

    };
});