document.getElementById("joinUsForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Validate form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
  
  
    if (name === "" || email === "" || phone === "") {
      alert("Please fill in all fields");
      return;
    }
  
    // Perform further validation if needed
    
  
    // Submit the form data
    // You can use AJAX or other techniques to send the data to a server
  
    alert("Thanks for joining us");
  });
  