const heading = document.querySelector(".heading__box");
const mainRepos = document.querySelector(".main");
const userInput = document.querySelector(".user__input");
const head = document.querySelector(".head");
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
        <p class="about__text yes__border">Member Since:${obj.created_at}</p>
      </div>
    </div>
  </div>
</div>`;
  head.innerHTML = html;
};
const addRepo = async function (url) {
  let a = await fetch(url);
  let r = await a.json();
  mainRepos.innerHTML = "";
  for (let repo of r) {
    let h = `<div class="box repo">
  <a href="${repo.html_url}" class="repo__name">${repo.name}</a>
  <div class="report">
    <p class="stat stat__1">Starts: ${repo.stargazers_count}</p>
    <p class="stat stat__2">Watchers: ${repo.watchers_count}</p>
    <p class="stat stat__3">Forks: ${repo.forks}</p>
  </div>
  </div>`;
    mainRepos.insertAdjacentHTML("afterbegin", h);
  }
};
userInput.addEventListener("input", function () {
  if (userInput.value !== "") {
    findUser(
      `https://api.github.com/users/${userInput.value}?client_id=996ca6b5187a15062efc&client_secret=9fd10f23427a1e0f7863b39e110a480c583f9d89`
    );
    addRepo(
      `https://api.github.com/users/${userInput.value}/repos?per_page=created: asc&sort=5&client_id=996ca6b5187a15062efc&client_secret=9fd10f23427a1e0f7863b39e110a480c583f9d89`
    );
  }
});
// let clienID = "996ca6b5187a15062efc";
// let sec = "9fd10f23427a1e0f7863b39e110a480c583f9d89";
