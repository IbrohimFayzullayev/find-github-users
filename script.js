// let getApi = function (url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((res) => console.log(res));
// };
// // getApi("https://api.github.com/users");
// // getApi("https://api.github.com/users/IbrohimFayzullayev/repos");
const heading = document.querySelector(".heading__box");
const main = document.querySelector(".main");
const userInput = document.querySelector(".user__input");
let findUser = async function (url) {
  let a = await fetch(url);
  let obj = await a.json();
  let html = `<div class="box user__info">
  <div class="user__img">
    <img class="user-img" src="${obj.avatar_url}" alt="" />
    <a href="${obj.html_url}" class="btn">View Profile</a>
  </div>

  <div class="user__about">
    <div class="statistics">
      <p class="stat stat__1">Public Repos: ${obj.public_repos}</p>
      <p class="stat stat__2">Public Gists: ${obj.public_gists}</p>
      <p class="stat stat__3">Followers: ${obj.followers}</p>
      <p class="stat stat__4">Following: ${obj.following}</p>
    </div>
    <div class="infoo">
      <div class="table__info">
        <p class="about__text">Company: ${obj.company}</p>
        <p class="about__text">Website/Blog:${obj.blog}</p>
        <p class="about__text">Location:${obj.location}</p>
        <p class="about__text yes__border">Member Since:${obj.created_a}</p>
      </div>
    </div>
  </div>
</div>`;
  heading.insertAdjacentHTML("afterend", html);
};

const addRepo = async function (url) {
  let a = await fetch(url);
  let repo = await a.json();
  let html = `<div class="box repo">
  <a href="${repo.html_url}" class="repo__name">${repo.name}</a>
  <div class="report">
    <p class="stat stat__1">Starts: ${repo.stargazers_count}</p>
    <p class="stat stat__2">Watchers: ${repo.watchers_count}</p>
    <p class="stat stat__3">Forks: ${repo.forks}</p>
  </div>
</div>`;
  main.insertAdjacentHTML("afterbegin", html);
};
userInput.addEventListener("input", function (e) {
  // console.log(userInput.value);
  findUser(`https://api.github.com/users/${userInput.value}`);
  addRepo(`https://api.github.com/users/${userInput.value}/repos`);
});

// let getApi = async function (url) {
//   let a = await fetch(url);
//   let b = await a.json();
//   return b;
// };
// let users = getApi("https://api.github.com/users");

// let apiGet = function (url) {
//   let a = fetch(url)
//     .then((res) => res.json())
//     .then(
//       (resjson) =>
//         new Promise((resolve) => {
//           resolve(resjson);
//         })
//     );
//   return a;
// };
// apiGet("https://api.github.com/users");
