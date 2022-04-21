console.log("HW 8 - 2 - chap 22");

//  function that  captures username and then uses to retrieve related info from github
const getUserInfo = (username) => {
console.log("TEST", username, textbox.value) //testing values

  // Fetching user info from github
  //username = "ninersontherize";  //testing
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((user) => {

      // checking on the values returned from the fetch
      const userlogin = user.login;     // userlogins i'm familiar with: ninersontherize, mmcnicol40, bpesquet, ashercsulb
      console.log("user", user);
      console.log("userlogin", userlogin);
      console.log("avatar", user.avatar_url);
      console.log("name", user.name);
      console.log("blog", user.blog);
      console.log("created", user.created_at);

      // write contents to screen per spec
      const newtpic = document.getElementById("persPic");
      newtpic.innerHTML = `<img src="${user.avatar_url} " width="150" alt="W3Schools.com"></img>`;
      const newt = document.getElementById("userInfo");
      newt.innerHTML = `<tr><th> Name </th> <td> ${user.name}</td></tr><tr><th> Blog</th> <td> ${user.blog} </td></tr><tr><th> Created </th> <td> ${user.created_at} </td></tr>`
      // message.appendChild("");  //i was trying to use this line to write to the screen but was getting an error - and yet everything wrote to screen w.o it. not sure why

    })
    .catch((err) => {
      console.error("Error message is: ", err.message);
    });
};

// wait for click and then grab value of textbox and call function getUserInfo with value
button.addEventListener("click", function () {
  let username = textbox.value;
  getUserInfo(username)
});
