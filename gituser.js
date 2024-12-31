let inp = document.querySelector("#username");
let btn = document.querySelector("button");
let name = document.querySelector("#name");
let plink = document.querySelector("#link");
let details = document.querySelector("#details");
let ava = document.querySelector("#avatar");

let url = "https://api.github.com/users/";

async function getUser() {
  let username = inp.value;

  if (!username) {
    name.innerText = "Please enter a username.";
    ava.setAttribute("src", "");
    plink.innerText = "";
    details.innerHTML = "";
    return;
  }

  try {
    let res = await axios.get(url + username);
    name.innerText = res.data.name;
    ava.setAttribute("src", res.data.avatar_url);

    details.innerHTML = `
      <li>Username: ${res.data.login}</li>
      <li>Public Repos: ${res.data.public_repos}</li>
      <li>Followers: ${res.data.followers}</li>
      <li><a href="${res.data.html_url}" target="_blank">View Profile</a></li>
      `;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

btn.addEventListener("click", getUser);
