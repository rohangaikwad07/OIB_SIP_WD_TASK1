// JavaScript program to make a website functional

// Example 1: Toggle visibility of an element
function toggleVisibility() {
    var element = document.getElementById('toggleElement');
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
  
  // Example 2: Handling form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    var formData = new FormData(event.target);
    var name = formData.get('name');
    var email = formData.get('email');
  
    // Example: Validate the form data
    if (name && email) {
      alert('Form submitted successfully!');
      // Further logic: send data to server, etc.
    } else {
      alert('Please fill out all fields.');
    }
  }
  
  // Example 3: Fetching data from an API
  function fetchData() {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        // Use the fetched data
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Example 4: Event listeners
  document.getElementById('toggleButton').addEventListener('click', toggleVisibility);
  document.getElementById('myForm').addEventListener('submit', handleSubmit);
  
  // Example 5: Manipulating the DOM
  function updateContent() {
    var element = document.getElementById('content');
    element.innerHTML = 'New content updated via JavaScript!';
  }
  
  // Example 6: Working with cookies/local storage
  localStorage.setItem('username', 'JohnDoe');
  var username = localStorage.getItem('username');
  console.log('Username:', username);
  
  // You can add more functionality as per your website's requirements
  
  // Example 7: Working with date and time
  function displayDateTime() {
      const now = new Date();
      const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
      const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      console.log(`Current date: ${date}`);
      console.log(`Current time: ${time}`);
  }
  
  // Call your functions to make them execute
  toggleVisibility(); // Toggle visibility example
  handleSubmit(); // Form submission example
  fetchData(); // Fetching data example
  