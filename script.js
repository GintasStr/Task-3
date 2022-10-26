/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

async function getUsersData(url) {
  try {
    const response = await fetch(url);
    const responseUsers = await response.json();
    return responseUsers;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getUsersDataFromUrl(url) {
  const data = await getUsersData(url);
  document.getElementById("btn").addEventListener("click", (error) => {
    fillUsersTable(data);
  });
  console.log(data);
}

function fillUsersTable(data) {
  const usersTable = document.getElementById("output");

  data.forEach((dataItem) => {
    const usersContainer = document.createElement("div");
    usersContainer.className = "users-container";

    const login = document.createElement("div");
    login.textContent = dataItem.login;
    login.className = "login";

    const userAvatar = document.createElement("img");
    userAvatar.src = dataItem.avatar_url;
    userAvatar.className = "user-avatar";

    usersContainer.append(login, userAvatar);
    usersTable.append(usersContainer);

    // document.getElementById("message").style.display = "none";
  });
}

getUsersDataFromUrl(ENDPOINT);
