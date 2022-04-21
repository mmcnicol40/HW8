console.log("HW 7 - problem #2 - autocomplete");
console.log("HW 8 - 1 - chap 21");

// Anonymous function for retrieving and displaying a random beer
const grabRandomBeer = () => {
 
  // Fetching random beer data from API
  fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
    .then((response) => response.json())
    .then((beers) => {
    
      // API returns an array containg only one element: we get it
      const beer = beers[0];    // API returns an array containg only one element: we get it
      console.log(beers);
      console.log(beers[1].name,beers[1].year,beers[1].artist);
      
      // Creating DOM element for some beer properties
       const nameElement = document.createElement("td");
      nameElement.textContent = beers[0].name;
      const yearElement = document.createElement("td");
      yearElement.textContent = beers[0].year;
      const artistElement = document.createElement("td");
      artistElement.textContent = beers[0].artist;

      
      // Create DOM element for additional beer info
      //const infoElement = document.createElement("p");
      //infoElement.textContent = `Artist by Volume: ${beers[0].name} Volume: ${beers[0].year} ${beers[0].artist}`;

      // Clear previous beer data
      const rowElement = document.getElementById("paintings");
      rowElement.innerHTML = "";
      
      // Add beer info to the page
      rowElement.appendChild(nameElement);
      rowElement.appendChild(yearElement);
      rowElement.appendChild(artistElement);
    })
    .catch((err) => {
      console.error("Error message is: ", err.message);
    });
};

// Grab a new beer when clicking the button
document.getElementById("grabButton").addEventListener("click", grabRandomBeer);
