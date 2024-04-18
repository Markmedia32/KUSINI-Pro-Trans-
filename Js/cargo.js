document.addEventListener('DOMContentLoaded', function() {
    var cargoForm = document.getElementById('cargo-form');

    cargoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Retrieve form values
        var cargoType = document.getElementById('cargo-type').value;
        var weight = document.getElementById('weight').value;
        var destination = document.getElementById('destination').value;
        var deliveryDate = document.getElementById('delivery-date').value;

        // Display cargo details in the alert message
        var message = `Cargo Details submitted!\n\nCargo Type: ${cargoType}\nWeight: ${weight}\nDestination: ${destination}\nPreferred Delivery Date: ${deliveryDate}\n\nOur Team will get back to you regarding your ${cargoType} Delivery.\nThank you for choosing Kusini Pro Trans PTY LTD!`;

        // Display alert message
        alert(message);

        // Reset the form
        cargoForm.reset();
    });
});
