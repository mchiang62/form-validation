$(document).ready(function () {

    document.getElementById('myButton').onclick = function validateForm(event) {
        event.preventDefault();
        const x = document.forms["myForm"]["fname"].value;
        if (x.length < 2) {
            showErrorMsg()
            $("#fnameError").html(
                "Minimum characters 2"
            );
        } else if (x.length >= 2) {
            showNoMsg()
            $("#fnameError").empty()

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