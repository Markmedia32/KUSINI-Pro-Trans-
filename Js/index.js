// JavaScript code for dropdown menu functionality
document.addEventListener("DOMContentLoaded", function() {
    // Get the dropdown button
    var dropdownToggle = document.querySelector('.dropdown-toggle');

    // Get the dropdown content
    var dropdownContent = document.querySelector('.dropdown-content');

    // Toggle the dropdown content when the dropdown button is clicked
    dropdownToggle.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Function to scroll to contact section
    function scrollToContact() {
        var contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Get the Get a Quote button
    var getQuoteButton = document.querySelector('.get-quote-btn');

    // Add click event listener to the Get a Quote button to scroll to contact section
    getQuoteButton.addEventListener('click', scrollToContact);
});
