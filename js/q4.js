console.log("HW 8 #4");

document.querySelector("form").addEventListener("submit", e => {
    
  // Cancel default behavior of sending a synchronous POST request
  e.preventDefault();

  // Create a FormData object, passing the form as a parameter
  const formData = new FormData(e.target);

  formData.forEach((val, key) => {
    console.log(`The key is: ${key}, The value is: ${val}`);
            
        const newt = document.getElementById("userInfo");
        newt.innerHTML = `<tr><th> ${key} </th> <td> ${val} </td></tr>`
       //  newt.append("");
  });

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