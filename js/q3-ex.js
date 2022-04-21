
console.log("HW 8 - 3 - chap 23");
// first try - Defining an array containing two objects
const userName = "mitch"
const countries = [
  {
    name: "Scotland",
    year: "1980"
  },
  {
    name: "Spain",
    year: "2020"
  }
];

//second try - is this the right format?
const user = {
  name: "mitch",
  countryInfo: {
    name: 'spain',
    year: "1980"
  }
};


console.log(user);
console.log(userName);
console.log(countries);
console.log(user); // Display the array of objects


document.querySelector("form").addEventListener("submit", e => {
    
  // Cancel default behavior of sending a synchronous POST request
  e.preventDefault();

  // Create a FormData object, passing the form as a parameter
  const formData = new FormData(e.target);

  formData.forEach((val, key) => {
    console.log(`The key is: ${key}, The value is: ${val}`);
  });

  for ([key, val] of formData) {
    console.log(`Key: ${key}, Value: ${val}`);
  };
  
  //Send form data to the server with an asynchronous POST request
  fetch("https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(result => {
      document.getElementById("result").textContent = result;
    })
    .catch(err => {
      console.error(err.message);
    });
});
