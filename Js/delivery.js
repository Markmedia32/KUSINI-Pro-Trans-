document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("book-delivery-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const clientName = document.getElementById("client-name").value;
        const message = `Form Submitted! Our Team will Get back to you regarding your Booking. Thank you for Choosing Kusini Pro Trans PTY LTD, ${clientName}!`;

        alert(message);

        // Reset the form after the alert is closed
        form.reset();
    });
});
