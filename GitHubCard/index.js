import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
console.log(axios.get('https://api.github.com/users/clintfix'))


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
  "bigknell"
];

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
const entryPoint = document.querySelector('.cards');

function cardCreator(username) {
  // create elements
    const elCard = document.createElement('div');
    const elUserImg = document.createElement('img');
    const elCardInfo = document.createElement('div');
    const elUserName = document.createElement('h3');
    const elUserUserName = document.createElement('p');
    const elUserLocation = document.createElement('p')
    const elUserProfile = document.createElement('p');
    const elUserProfileLink = document.createElement('a');
    const elUserFollowerCount = document.createElement('p')
    const elUserFollowingCount = document.createElement('p');
    const elUserBio = document.createElement('p');

  // set classnames, attributes
    elCard.classList.add('card');
    elCardInfo.classList.add('card-info');
    elUserName.classList.add('name');
    elUserUserName.classList.add('username');

  // create hierarchy
    elCard.appendChild(elUserImg);
    elCard.appendChild(elCardInfo);
    elCardInfo.appendChild(elUserName);
    elCardInfo.appendChild(elUserUserName);
    elCardInfo.appendChild(elUserLocation);
    elCardInfo.appendChild(elUserProfile);
    elCardInfo.appendChild(elUserFollowerCount);
    elCardInfo.appendChild(elUserFollowingCount);
    elCardInfo.appendChild(elUserBio);

  
  // get data based on username
  axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      const { avatar_url, name, login, location, url, followers, following, bio} = response.data;
      // Set content
        elUserImg.src = avatar_url;
        elUserName.textContent = name;
        elUserUserName.textContent = login;
        elUserLocation.textContent = location;
        elUserProfile.textContent = 'Profile: ';
        elUserProfileLink.setAttribute('href', url);
        elUserProfileLink.textContent = url;
        elUserProfile.appendChild(elUserProfileLink);
        elUserFollowerCount.textContent = `Followers: ${followers}`;
        elUserFollowingCount.textContent = `Following: ${following}`;
        elUserBio.textContent = `Bio: ${bio}`;
    })
    .catch(err => {
      console.log(err = " <- this is the error");
    })
  return elCard;
}

//Invote cardCreator and pass it a username. Add it to the DOM
entryPoint.appendChild(cardCreator('clintfix'));

followersArray.forEach(el => {
  entryPoint.appendChild(cardCreator(el))
});
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
