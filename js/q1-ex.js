console.log("HW 8 - 1 - chap 21");

// function for calling artist data from API
const getArtists = () => {
  // executing fetch for artist painting info from API
  fetch(
    "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
  )
    .then((response) => response.json())
    .then((artistInfo) => {
      
      // checking values returned by call - to console
      console.log("artistinfo",artistInfo);
      console.log(artistInfo[1].name, artistInfo[1].year, artistInfo[1].artist);

      const arrlen = artistInfo.length;
      for (let x = 0; x < arrlen; x++) {
        let one = document
          .getElementById("paintings")
          .appendChild(document.createElement("tr"));
        one
          .appendChild(document.createElement("td"))
          .appendChild(document.createTextNode(artistInfo[x].name));
        one
          .appendChild(document.createElement("td"))
          .appendChild(document.createTextNode(artistInfo[x].year));
        one
          .appendChild(document.createElement("td"))
          .appendChild(document.createTextNode(artistInfo[x].artist));
      }
    })
    .catch((err) => {
      console.error("Error message is: ", err.message);
    });
};

// execute getArtists function
getArtists();
