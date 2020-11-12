$(document).ready(function () {

    document.getElementById('myButton').onclick = function validateForm(event) {
        event.preventDefault();
        const firstName = document.forms["myForm"]["fname"].value;
        if (firstName.length < 2) {
            showErrorMsg()
            $("#fNameError").html(
                "Minimum characters 2"
            );
        } else if (firstName.length >= 2) {
            showNoMsg()
            $("#fNameError").empty()

        }

        const lastName = document.forms["myForm"]["lname"].value;
        if (lastName.length < 2) {
            showErrorMsg()
            $("#lNameError").html(
                "Minimum characters 2"
            );
        } else if (lastName.length >= 2) {
            showNoMsg()
            $("#lNameError").empty()

        }




    }

    const showErrorMsg = () => {
        // event.preventDefault();
        $(".errorMessage").html(
            "ERROR: Oops, please fix the field(s) below and resubmit when finished"
        );
    }
    const showNoMsg = () => {
        // event.preventDefault();
        $(".errorMessage").html(
            ""
        );
    }


    function displayConfirmation() {
        event.preventDefault();
        $("form").empty();
        $("form").html("<p>Thank you for signing up!</p>");
        $("p").css({
            "font-size": "20pt",
            "font-weight": "700",
            "margin-top": "50px"
        });

    }

});