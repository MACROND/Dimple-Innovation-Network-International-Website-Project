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

  const formData = new FormData(event.target); // Get form data

  // Convert form data to JSON
  const jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  // Send the data to the API endpoint using fetch
  fetch("http://127.0.0.1:3000/api/submitForm", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonData),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Response from API:', data);
    // You can handle the API response here, e.g., show a success message to the user
    alert("Thanks for joining us");
  })
  .catch((error) => {
    console.error('Error sending form data:', error);
    // Handle any error that occurred during the API call
  });
});
