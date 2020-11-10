// const nameErrors = document.getElementsByClassName("nameError")

$(document).ready(function () {
    document.getElementById('myButton').onclick = function validateForm() {

        const x = document.forms["myForm"]["fname"].value;
        if (x === "") {
            showErrorMsg()
            minLength()
        }
       
    }

    const showErrorMsg = () => {
        event.preventDefault();
        $(".errorMessage").html(
            "ERROR: Oops, please fix the field(s) below and resubmit when finished"
        );
    }

    const minLength = () => {
        event.preventDefault();
        $(".nameError").html(
            "Minimum characters 2"
        );

    }

});


