/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";
const topCard = document.querySelector(".cards");

const getPromise = () => {
  axios
    .get("https://api.github.com/users/johnyoun28")

    .then((res) => {
      console.log(res);
      const resData = createCard(res.data);
      topCard.appendChild(resData);
      // res.data.forEach((item) => {
      //   topCard.append(createCard(item.data));
      // });
    })
    .catch((error) => {
      console.log(error);
    });
};
getPromise();
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

followersArray.forEach((item) => {
  axios.get(`https://api.github.com/users/${item}`).then((res) => {
    topCard.appendChild(createCard(res.data));
  });
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
//CREATE ELEMENTS
function createCard(objects) {
  const card = document.createElement("div");
  card.classList.add("card");
  const image = document.createElement("img");
  const info = document.createElement("div");
  info.classList.add("card-info");
  const name = document.createElement("h3");
  name.classList.add("name");
  const username = document.createElement("p");
  username.classList.add("username");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const href = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  //APEND
  card.appendChild(image);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  name.textContent = objects.name;
  username.textContent = objects.login;
  image.src = objects.avatar_url;
  bio.textContent = objects.bio;
  location.textContent = objects.location;
  followers.textContent = `Followers: ${objects.followers}`;
  following.textContent = `Following: ${objects.following}`;
  href.textContent = objects.html_url;

  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
