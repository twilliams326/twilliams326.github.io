// JavaScript to handle the modal functionality
document.addEventListener("DOMContentLoaded", function() {
    // Get the modal element
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("submit");

    // Get the <span> element that closes the modal
    var span = document.getElementById("closeModal");

    // Function to open the modal
    function openModal() {
        modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Event listener to open the modal when the screen is refreshed
    window.addEventListener("load", openModal);

    // Event listener to close the modal when the "Close" button is clicked
    span.addEventListener("click", closeModal);

    // Event listener to close the modal when the user clicks outside the modal
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });
});
/*Scroll to top cards*/



  // Function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Get the button element
  var button = document.getElementById('this-one');

  // Add a click event listener to the button
  button.addEventListener('click', scrollToTop);

  function openModal1(title, price) {
    document.getElementById('modal-title1').textContent = title;
    document.getElementById('modal-price1').textContent = price;
    document.getElementById('modal1').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal1').style.display = 'none';
}
